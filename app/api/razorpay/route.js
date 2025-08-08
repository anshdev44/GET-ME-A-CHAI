import { NextResponse } from 'next/server';
import connectDB from '../../db/connect';
import Payment from '../../models/payment';
import crypto from 'crypto';


const validatePaymentVerification = (params, signature, secret) => {
    try {
        const { order_id, payment_id } = params;
        const body = order_id + "|" + payment_id;
        const expectedSignature = crypto
            .createHmac('sha256', secret)
            .update(body.toString())
            .digest('hex');
        
        return expectedSignature === signature;
    } catch (error) {
        // console.error('Validation error:', error);
        return false;
    }
};

export const POST = async (req) => {
    try {
      
        
        await connectDB();
      

        let body = await req.formData();
        body = Object.fromEntries(body);
        // console.log('Form data received:', Object.keys(body));

        // Check required fields
        if (!body.razorpay_order_id || !body.razorpay_payment_id || !body.razorpay_signature) {
            // console.error('Missing required fields:', body);
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        let p = await Payment.findOne({ oid: body.razorpay_order_id });
        
        
        if (!p) {
            return NextResponse.json({ error: "Payment not found" }, { status: 400 }); 
        }

        // console.log('Validating payment...');
        let verified = validatePaymentVerification(
            {
                order_id: body.razorpay_order_id,
                payment_id: body.razorpay_payment_id,
            },
            body.razorpay_signature,
            process.env.RAZORPAY_KEY_SECRET
        );

     
        if (verified) {
            await Payment.updateOne({ oid: body.razorpay_order_id }, { done: true });
            const updatedPayment = await Payment.findOne({ oid: body.razorpay_order_id });

            
            const redirectUrl = process.env.URL || 'http://localhost:3000';
            const finalUrl = `${redirectUrl}/${updatedPayment.to_user}?payment=true`;
         
            
            return NextResponse.redirect(finalUrl);
        }

        return NextResponse.json({ error: "Invalid signature" }, { status: 403 });

    } catch (err) {
   
        return NextResponse.json({ error: "Internal Server Error", details: err.message }, { status: 500 });
    }
};
