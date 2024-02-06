import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const drop = await sql`DROP TABLE pets`;
    // const result =
    //   await sql`CREATE TABLE IF NOT EXISTS Pets ( Name varchar(255), Owner varchar(255) );`;

    // const res = await sql`INSERT INTO pets VALUES ('Dog','Raviraj' )`;
    const data = await sql`SELECT * FROM pets`;
    return NextResponse.json({ rows: data.rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
