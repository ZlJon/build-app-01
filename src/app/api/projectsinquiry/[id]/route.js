import { NextResponse } from "next/server";
import { pool } from "../../../../../config/db";

export async function GET(req, { params }) {
  try {
    const results = await pool.query(`select * from projects where id = ?`, [
      params.id,
    ]);
    return NextResponse.json(results[0]);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function PATCH(req, { params }) {
  const data = await req.json();

  try {
    await pool.query("update projects set ? where id = ?", [data, params.id]);
    return NextResponse.json({ ...data, id: params.id });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}

export async function DELETE(req, { params }) {
  try {
    await pool.query("delete from projects where id = ?", [params.id]);
    return NextResponse.json({}, { status: 204 });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}
