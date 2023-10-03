import { NextResponse } from "next/server";
import { pool } from "../../../../config/db";
import bcrypt from "bcrypt";

/* 가입하기 */
export const POST = async (req) => {
  try {
    let { email, password, name, phone } = await req.json();

    if (!email || !password) {
      return new NextResponse("실패했습니다.", { status: 400 });
    }

    let exist = await pool.query(
      `select * from members where email = "${email}"`
    );
    exist = exist[0];

    if (exist) {
      throw new Error(`입력하신 ${email}은 이미 존재합니다.`);
    }

    password = await bcrypt.hash(password, 10);

    const results = await pool.query(`insert into members set ?`, {
      email,
      password,
      name,
      phone,
    });
    console.log(email, password, name, phone);

    return NextResponse.json({
      email,
      password,
      name,
      phone,
      id: results.insertId,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
