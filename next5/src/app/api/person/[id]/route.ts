import prisma from "@/helper/prisma";
import { NextResponse } from "next/server";

export const PUT = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const id = parseInt(params.id);
  const body = await req.json();

  try {
    const updatedPerson = await prisma.person.update({
      where: { id },
      data: {
        name: body.name,
        age: body.age,
      },
    });

    return NextResponse.json(updatedPerson);
  } catch {
    return NextResponse.json(
      { error: "Data tidak ditemukan atau gagal diupdate" },
      { status: 400 }
    );
  }
};

export const DELETE = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const id = parseInt(params.id);

  try {
    await prisma.person.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Data tidak ditemukan atau gagal dihapus" },
      { status: 400 }
    );
  }
};
