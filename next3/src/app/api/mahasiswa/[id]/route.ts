import { PrismaClient } from "@/generated/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

// GET satu mahasiswa by ID
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  const mahasiswa = await prisma.mahasiswa.findUnique({
    where: { no_mahasiswa: id },
    include: {
      universitas: true,
      prodi: true,
      ambil_matkul: {
        include: { matkul: true },
      },
    },
  });

  if (!mahasiswa) {
    return NextResponse.json({ error: "Mahasiswa tidak ditemukan" }, { status: 404 });
  }

  return NextResponse.json(mahasiswa);
}

// UPDATE mahasiswa
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const id = parseInt(params.id);
    const body = await req.json();

    const updatedMahasiswa = await prisma.mahasiswa.update({
      where: { no_mahasiswa: id },
      data: {
        nama_mahasiswa: body.nama_mahasiswa,
        tanggal_lahir: new Date(body.tanggal_lahir),
        no_prodi: body.no_prodi, // Pastikan dikirim dari frontend
        no_univ: body.no_univ,   // Pastikan dikirim dari frontend
      },
    });

    return NextResponse.json({ message: "Data berhasil diupdate", mahasiswa: updatedMahasiswa });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Gagal mengupdate data" }, { status: 500 });
  }
}

// DELETE tetap bisa di sini juga (jika kamu belum buat sebelumnya)
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const id = parseInt(params.id);

    if (isNaN(id)) {
      return NextResponse.json({ error: "ID tidak valid" }, { status: 400 });
    }

    await prisma.mahasiswa.delete({
      where: { no_mahasiswa: id },
    });
    return NextResponse.json({ message: "Data berhasil dihapus" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Gagal menghapus data" }, { status: 500 });
  }
}
