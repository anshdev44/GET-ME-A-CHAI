import mongoose from "mongoose";

export default async function connectDB() {
  if (mongoose.connections[0].readyState) {
    console.log("✅ Already connected to the database");
    return;
  }

  try {
    await mongoose.connect("mongodb://localhost:27017/get-me-a-chai", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Database connected successfully");
  } catch (err) {
    console.error("❌ Unable to connect to database:", err);
    process.exit(1); 
  }
}
