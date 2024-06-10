import { NextResponse } from "next/server";

export const errorHandler = (statusCode, message, data) => {
  return NextResponse.json({ error: message, data }, { status: statusCode });
};
