import { SanityClient } from "@sanity/client";
import bcrypt from "bcryptjs";

export default async function signUp(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { name, email, password } = req.body;

    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
        details: { name, email, passwordProvided: !!password },
      });
    }

    // Debugging: Log received request
    console.log("🔹 Signup Request Received:", { name, email });

    // Check if user exists
    const query = `*[_type == "user" && email == $email][0]`;
    let existingUser;
    try {
      existingUser = await SanityClient.fetch(query, { email });
    } catch (fetchError) {
      console.error("❌ Error Fetching User:", fetchError);
      return res.status(500).json({
        message: "Failed to check existing users",
        error: fetchError.message,
      });
    }

    if (existingUser) {
      console.warn("⚠️ User already exists:", existingUser.email);
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (hashError) {
      console.error("❌ Password Hashing Failed:", hashError);
      return res.status(500).json({
        message: "Failed to hash password",
        error: hashError.message,
      });
    }

    // Create new user
    const newUser = {
      _type: "user",
      name,
      email,
      password: hashedPassword,
    };

    let createdUser;
    try {
      createdUser = await SanityClient.create(newUser);
    } catch (createError) {
      console.error("❌ Error Creating User:", createError);
      return res.status(500).json({
        message: "Failed to create user",
        error: createError.message,
      });
    }

    console.log("✅ User Created Successfully:", createdUser);
    return res.status(201).json({
      message: "User created successfully",
      user: createdUser,
    });
  } catch (error) {
    console.error("❌ Unexpected Error:", error);
    return res.status(500).json({
      message: "Unexpected error occurred",
      error: error.message,
    });
  }
}
