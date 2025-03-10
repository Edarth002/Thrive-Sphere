import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const query = `*[_type == "user" && email == $email][0]`;
        const params = { email: credentials.email };

        const response = await fetch(
          `https://y5zakwvd.api.sanity.io/v2024-03-09/data/query/production?query=${encodeURIComponent(
            query
          )}`,
          { headers: { Authorization: `Bearer ${process.env.SANITY_TOKEN}` } }
        );
        const { result: user } = await response.json();
      },
    }),
  ],
});
