import prisma from "@/helper/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await prisma.person.findMany();
  console.log(data);
  return NextResponse.json(data);
}

export const POST = async (req: Request) => {
  const body = await req.json();
  console.log(body);

  const newPerson = await prisma.person.create({
    data: {
      name: body.name,
      age: body.age,
    },
  });
  return NextResponse.json({ info: "berhasil", person: newPerson });
};


