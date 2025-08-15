"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { updatedprofile, fetchuser } from "../action/interaction";

const Dash = () => {
  const { data: session } = useSession();
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);

  // Fetch existing user data once session is available
  useEffect(() => {
    if (session?.user?.name) {
      (async () => {
        try {
          const data = await fetchuser(session.user.name);
          console.log(data);
          if (data) setForm(data);
        } catch (err) {
          console.error("Failed to fetch user:", err);
        }
      })();
    }
  }, [session]);

  const handlechange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submit = async (e) => {
    e.preventDefault(); // stop page reload
    if (!session?.user?.name) return;

    setLoading(true);
    try {
      const res = await updatedprofile(form, session.user.name);
      console.log("Profile updated:", res);
      if (res.error) {
        alert(`Error: ${res.error}`);
      } else {
        alert("Profile updated successfully!");
      }
    } catch (err) {
      console.error("Update failed:", err);
      alert("Failed to update profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md p-8 rounded-xl border border-white/20 shadow-lg backdrop-blur-md">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          User Info
        </h2>
        <ul className="space-y-4">
          {/* Name */}
          <li className="flex flex-col">
            <label htmlFor="name" className="text-white mb-1">
              Name Please
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name || ""}
              onChange={handlechange}
              placeholder="Enter name"
              className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </li>

          {/* Email */}
          <li className="flex flex-col">
            <label htmlFor="email" className="text-white mb-1">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={form.email || ""}
              onChange={handlechange}
              placeholder="Enter email"
              className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </li>

          {/* Username */}
          <li className="flex flex-col">
            <label htmlFor="username" className="text-white mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={form.username || ""}
              onChange={handlechange}
              placeholder="Enter username"
              className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </li>

          {/* Profile Pic */}
          <li className="flex flex-col">
            <label htmlFor="profilePic" className="text-white mb-1">
              Profile Pic Link
            </label>
            <input
              type="text"
              id="profilePic"
              name="profilePic"
              value={form.profilePic || form.profilepic || ""}
              onChange={handlechange}
              placeholder="Enter profile pic URL"
              className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </li>

          {/* Cover Pic */}
          <li className="flex flex-col">
            <label htmlFor="coverPic" className="text-white mb-1">
              Cover Pic Link
            </label>
            <input
              type="text"
              id="coverPic"
              name="coverPic"
              value={form.coverPic || form.coverpic || ""}
              onChange={handlechange}
              placeholder="Enter cover pic URL"
              className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </li>

          {/* Razorpay Id */}
          <li className="flex flex-col">
            <label htmlFor="razorpayId" className="text-white mb-1">
              Razorpay Id
            </label>
            <input
              type="text"
              id="razorpayId"
              name="razorpayId"
              value={form.razorpayId || form.razorpayId || ""}
              onChange={handlechange}
              placeholder="Enter Razorpay ID"
              className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </li>

          {/* Razorpay Secret */}
          <li className="flex flex-col">
            <label htmlFor="razorpaySecret" className="text-white mb-1">
              Razorpay Secret
            </label>
            <input
              type="text"
              id="razorpaySecret"
              name="razorpaySecret"
              value={form.razorpaySecret || form.razorpaySecret || ""}
              onChange={handlechange}
              placeholder="Enter Razorpay secret"
              className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </li>
        </ul>
        <button
          onClick={submit}
          disabled={loading}
          className="cursor-pointer mt-6 w-full py-2 px-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-red-700 transition-all disabled:opacity-50"
        >
          {loading ? "Saving..." : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default Dash;
