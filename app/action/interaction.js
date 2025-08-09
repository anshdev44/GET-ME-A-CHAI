"use server";

import Razorpay from "razorpay";
import Payment from "../models/payment";
import User from "../models/user";
import connectDB from "../db/connect";

// ✅ Initiate payment
export const initiate = async (amount, to_username, payment_from) => {
  await connectDB();
  console.log(User)

  const instance = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
  });

  const options = {
    amount: Number.parseInt(amount) ,
    currency: "INR"
  };

  const order = await instance.orders.create(options);

  await Payment.create({
    oid: order.id,
    amount: amount,
    to_user: to_username,
    name: payment_from.name,
    message: payment_from.message
  });

  return order;
};

// ✅ Fetch single user
export const fetchuser = async (username) => {
  await connectDB();
  const u = await User.findOne({ username });
  if (!u) return null;
  return u.toObject();
};


export const fetchpayment = async (username) => {
  await connectDB();
  return await Payment.find({ to_user: username ,done:true});
};


export const updatedprofile = async (data, oldusername) => {
  await connectDB();

  const ndata = data; 

  const mappedData = {
    name: ndata.name,
    email: ndata.email,
    profilepic: ndata.profilePic,
    coverpic: ndata.coverPic,
    razorpayId: ndata.razorpayId,
    razorpaySecret: ndata.razorpaySecret,
    updatedAt: new Date()
  };


  Object.keys(mappedData).forEach(key => {
    if (mappedData[key] === undefined) {
      delete mappedData[key];
    }
  });

  if (oldusername !== ndata.username && ndata.username) {
    const existingUser = await User.findOne({ username: ndata.username });
    if (existingUser) {
      return { error: "Username already exists", status: 400 };
    }
    mappedData.username = ndata.username;
  }

  const result = await User.updateOne({ username: oldusername }, { $set: mappedData });
  
  if (result.matchedCount === 0) {
    return { error: "User not found", status: 404 };
  }
  
  return { success: true };
};
