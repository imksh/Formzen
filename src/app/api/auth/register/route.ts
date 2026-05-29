import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import connectDB from "@/lib/db";
import User from "@/models/User";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();

    const { email, password, name } = body;

    // validations
    if (!email || !password || !name) {
      return NextResponse.json(
        {
          success: false,
          message: "Email, password, and name are required",
        },
        {
          status: 400,
        },
      );
    }

    // find user
    const user = await User.findOne({
      email,
    });

    if (user) {
      return NextResponse.json(
        {
          success: false,
          message: "User already exists",
        },
        {
          status: 400,
        },
      );
    }

    // compare password
    const hasedPassword = await bcrypt.hash(password, 10);
    const avatar = {
      url: `https://placehold.co/600x400?text=${name.charAt(0).toUpperCase()}`,
      publicId: "",
    };

    // create user
    const newUser = new User({
      email,
      password: hasedPassword,
      name,
      avatar,
    });

    await newUser.save();

    // generate token
    const token = jwt.sign(
      {
        _id: newUser._id,
        email: newUser.email,
      },
      process.env.JWT_SECRET!,
      {
        expiresIn: "7d",
      },
    );

    // remove password
    const userData = {
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      phone: newUser.phone,
      avatar: newUser.avatar,
    };

    // response
    const response = NextResponse.json(
      {
        success: true,
        message: "User registered successfully",
        data: userData,
      },
      {
        status: 201,
      },
    );

    // set cookie
    response.cookies.set({
      name: "token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60,
      path: "/",
    });

    return response;
  } catch (error) {
    console.log("Error in register route", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      {
        status: 500,
      },
    );
  }
}
