
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import mongoose from "mongoose";
import User from "../../../models/user";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
   GoogleProvider({
    clientId: process.env.GOGGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  })

  ],
  callbacks: {
    async signIn({ user, account }) {
      const isAllowedToSignIn = true;




      // Extract email
      const email = user?.email;

      if (account.provider === "github" && email) {
        await mongoose.connect("mongodb://localhost:27017/get-me-a-chai");

        let currentUser = await User.findOne({ email });

        if (!currentUser) {
          const newUser = await new User({
            email,
            username: email.split("@")[0],
          }).save();

          user.name = newUser.username;
        } else {
          user.name = currentUser.username;
        }
      }

      return isAllowedToSignIn;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
