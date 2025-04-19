import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await prisma.mahasiswa.findMany();
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();
  const { nama, nim, jurusan, angkatan, email } = body;

  const data = await prisma.mahasiswa.create({
    data: { nama, nim, jurusan, angkatan, email },
  });

  return NextResponse.json(data);
}
