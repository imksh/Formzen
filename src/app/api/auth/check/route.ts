import { NextRequest, NextResponse } from "next/server";

import jwt from "jsonwebtoken";

import connectDB from "@/lib/db";
import User from "@/models/User";

export async function GET(
  req: NextRequest 
) {
  try {
    await connectDB();

    const token =
      req.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    // verify token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as {
      userId: string;
    };

    // fetch user
    const user = await User.findById(
      decoded.userId
    ).select("-password");

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "User is authenticated",
        data: user,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(
      "Error in auth check route",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Unauthorized",
      },
      {
        status: 401,
      }
    );
  }
}