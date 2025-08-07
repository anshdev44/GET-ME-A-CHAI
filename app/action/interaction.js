"use server"
import React from "react";
import Razorpay from "razorpay";
import Payment from "../models/payment"
import User from "../models/user"
import connectDB from "../db/connect"
import PaymentPage from "../components/pay";

export const initiate = async (amount, to_username, payment_from) => {
    await connectDB();

    var instance = new Razorpay({ key_id: process.env.RAZORPAY_ID, key_secret: process.env.RAZORPAY_SECRET });
   
    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }

    let x = await instance.orders.create(options)

    await Payment.create({ old: x.id, amount: amount, to_user: to_username, name: payment_from.name, message:   payment_from.message })

    return x;

}