import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "@/app/(models)/User";
import { errorHandler } from "@/lib/errorHandler";

export async function POST(req) {
  const body = await req.json();
  const userData = body.formData;

  const { name, surname, email, phone, role } = userData;
  userData.password = process.env.DEFAULT_PASSWORD;

  try {
    console.log(userData);

    // Check if all fields are filled in
    if (
      !userData.name ||
      !userData.surname ||
      !userData.email ||
      !userData.phone
    ) {
      return NextResponse.json(
        { message: "Please fill in all fields" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const user = await User.findOne({ email });
    if (user) {
      return errorHandler(400, "User already exists");
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;

    await User.create(userData);

    return NextResponse.json(
      { message: "User successfully created!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
