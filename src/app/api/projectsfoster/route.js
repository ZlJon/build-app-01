import { NextResponse } from "next/server";
import { pool } from "../../../../config/db";

export async function GET() {
  try {
    const results = await pool.query(
      `select distinct * from projects where task = "육성"`
    );
    return NextResponse.json(results);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
