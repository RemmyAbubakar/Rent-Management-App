import NextAuth from "next-auth";
import db from "../../../lib/dbConnect";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../models/user";
import bcrypt from "bcryptjs";

export default NextAuth({
  providers: [
    CredentialsProvider({
      // type: "credentials",
      // credentials: {
      //  email: {
      //     label: "Email Address",
      //     placeholder: "Please enter your email address",
      //     required: true,
      //  },
      //  password: {
      //     label: "Password",
      //     type: "password",
      //     placeholder: "*************"
      //  }
      // },

      // try {
      //     let user = await User.findOne({ email: credentials.email});
      //     if(!user) {
      //         throw new Error("Invalid credentials");
      //     };

      //     let isMatch = await bcrypt.compare(
      //         credentials.password,
      //         user.password
      //         );

      //      if(!isMatch) {
      //         throw new Error("Invalid Credentials");
      //      }

      //      return {
      //         id: user._id,
      //         email: user.email,
      //      }
      // } catch (error) {
      //      throw new Error("Invalid Credentials");
      // } finally {
      //     await db.disconnect();
      // }
      async authorize(credentials) {
        // connect to the database
        await db.connect();

        // find user
        const user = await User.findOne({ email: credentials.email });

        // disconnect from the database
        await db.disconnect();

        //check for user's password
        if (user && bcrypt.compareSync(credentials.password, user.password)) {
          return {
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role,
          };
        }
        throw new Error("Invalid email or password");
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user?.id) token.id = user.id;
      if (user?.role) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (token?.id) session.user.id = token.id;
      if (token?.role) session.user.role = token.role;
      return session;
    },
  },

  pages: {
    signIn: "/signin",
    error: "/signin",
  },
});
