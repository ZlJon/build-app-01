import { NextResponse } from "next/server";
import { pool } from "../../../../config/db";

export async function GET() {
  try {
    const results = await pool.query(
      `select count(status) as achieve_new from projects where status = "신규"`
    );
    return NextResponse.json(results[0]);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
