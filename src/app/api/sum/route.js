import { NextResponse } from "next/server";
import { pool } from "../../../../config/db";

export async function GET() {
  try {
    const results = await pool.query(
      `select sum(cost) as achieve from projects where status = "계산서" or status = "입금"`
    );
    return NextResponse.json(results[0]);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
