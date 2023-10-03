import { NextResponse } from "next/server";
import { pool } from "../../../../config/db";

export async function GET() {
  try {
    let date = new Date();
    let year = date.getUTCFullYear();

    const results = await pool.query(
      `select * from plan where years = ${year}`
    );
    return NextResponse.json(results[0]);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { years, sales_plan, new_discover, grow_proj } = await req.json();
    console.log(years, sales_plan, new_discover, grow_proj);

    const result = await pool.query(`insert into plan set ?`, {
      years,
      sales_plan,
      new_discover,
      grow_proj,
    });
    return NextResponse.json({
      years,
      sales_plan,
      new_discover,
      grow_proj,
      id: result.insertId,
    });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function PATCH(req) {
  const data = await req.json();

  try {
    let date = new Date();
    let year = date.getUTCFullYear();

    await pool.query(`update plan set ? where years = ${year}`, [data]);
    return NextResponse.json({ ...data });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}
