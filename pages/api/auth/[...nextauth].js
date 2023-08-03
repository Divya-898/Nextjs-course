import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongo from "../../../database/conn";
import Users from "../../../model/Schema";
import { compare } from "bcryptjs";
import Employee from "../../../model/emp";
export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        connectMongo().catch((error) => {
          error: "connection failed...!";
        });
        //check user existance
        const result = await Users.findOne({ email: credentials.email });
        if (!result) {
          throw new Error("No user found with email please sign up");
        }
        //compare pass
        const checkPassword = await compare(
          credentials.password,
          result.password
        );
        //
        if (!checkPassword || result.email !== credentials.email) {
          throw new Error("Username or Password does not mathch");
        }
        return result;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const { name, email } = user;
        console.log("name", name);
        console.log("name", email);
        const options = {
          method: "POST",
          headers : { 'Content-Type': 'application/json'},
          body: JSON.stringify({name,
            email,})
      }
        try {
         
          // const userExists = await Employee.findOne({ email });

          // if (!userExists) {
          const res = await fetch("http://localhost:3000/api/employee", options);
          console.log("res", res);
          if (res.ok) {
            return user;
          }
        // }
        } catch (error) {
          console.log(error);
        
      }
    }
      return user;
  },
  },
   secret: "NiOhsjKd8mIBDYiOKRIPhG1/8wWdqG+cnfVVy3h0FvU=",
});
const handler = NextAuth

export { handler as GET, handler as POST };
