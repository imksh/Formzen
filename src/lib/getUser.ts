import jwt from "jsonwebtoken";

import connectDB from "@/lib/db";

import User from "@/models/User";

interface TokenPayload {
  _id: string;
}

export default async function getCurrentUser(
  token: string
) {
  try {
    await connectDB();

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as TokenPayload;

    const user = await User.findById(
      decoded._id
    ).select("-password");

    return user;
  } catch (err) {
    console.log(
      "Error verifying token:",
      err
    );

    return null;
  }
}