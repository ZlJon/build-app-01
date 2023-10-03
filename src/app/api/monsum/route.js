import { NextResponse } from "next/server";
import { pool } from "../../../../config/db";

export async function GET() {
  try {
    const results = await pool.query(
      `select month(created) as mon, sum(cost) as cost from projects group by mon`
    );
    return NextResponse.json(results);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
