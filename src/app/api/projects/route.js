import { NextResponse } from "next/server";
import { pool } from "../../../../config/db";

export async function GET() {
  try {
    const results = await pool.query(
      `select distinct * from projects where task = "발굴"`
    );
    return NextResponse.json(results);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const {
      task,
      years,
      business_area,
      service,
      region,
      company_name,
      content,
      pm_name,
      pic,
      cost,
      remarks,
    } = await req.json();
    console.log(
      task,
      years,
      business_area,
      service,
      region,
      company_name,
      content,
      pm_name,
      pic,
      cost,
      remarks
    );

    const result = await pool.query(`insert into projects set ?`, {
      task,
      years,
      business_area,
      service,
      region,
      company_name,
      content,
      pm_name,
      pic,
      cost,
      remarks,
    });
    return NextResponse.json({
      task,
      years,
      business_area,
      service,
      region,
      company_name,
      content,
      pm_name,
      pic,
      cost,
      remarks,
      id: result.insertId,
    });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
