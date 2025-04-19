import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  const body = await req.json();

  const update = await prisma.mahasiswa.update({
    where: { id },
    data: body,
  });

  return NextResponse.json(update);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  await prisma.mahasiswa.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
