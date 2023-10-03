import { NextResponse } from "next/server";
import { pool } from "../../../../config/db";

export async function GET() {
  try {
    const results = await pool.query(
      `select count(status) as achieve_grow from projects where status = "육성"`
    );
    return NextResponse.json(results[0]);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
