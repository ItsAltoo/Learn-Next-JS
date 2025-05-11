import { PrismaClient, Grade } from "@/generated/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      nama_mahasiswa,
      tanggal_lahir,
      universitas,
      program_studi,
      matkuls,
    } = body;

    // Find or create university
    let univ = await prisma.university.findFirst({
      where: { nama_univ: universitas.nama_univ },
    });

    if (!univ) {
      univ = await prisma.university.create({
        data: {
          nama_univ: universitas.nama_univ,
          grade: universitas.grade as Grade,
        },
      });
    }

    // Find or create program studi
    let prodi = await prisma.programStudi.findFirst({
      where: { nama_prodi: program_studi.nama_prodi },
    });

    if (!prodi) {
      prodi = await prisma.programStudi.create({
        data: {
          nama_prodi: program_studi.nama_prodi,
          grade: program_studi.grade as Grade,
        },
      });
    }

    const mahasiswa = await prisma.mahasiswa.create({
      data: {
        nama_mahasiswa,
        tanggal_lahir: new Date(tanggal_lahir),
        prodi: { connect: { no_prodi: prodi.no_prodi } },
        universitas: { connect: { no_univ: univ.no_univ } },
      },
    });

    // Jika ada mata kuliah yang dikirim, proses
    if (Array.isArray(matkuls)) {
      for (const matkul of matkuls) {
        // Find or create matkul
        let matkulData = await prisma.matkul.findFirst({
          where: { nama_matkul: matkul.nama_matkul },
        });

        if (!matkulData) {
          matkulData = await prisma.matkul.create({
            data: {
              nama_matkul: matkul.nama_matkul,
              dosen: matkul.dosen,
            },
          });
        }

        await prisma.ambilMatkul.create({
          data: {
            mahasiswa: { connect: { no_mahasiswa: mahasiswa.no_mahasiswa } },
            matkul: { connect: { no_matkul: matkulData.no_matkul } },
          },
        });
      }
    }

    return NextResponse.json({
      message: "Data berhasil ditambahkan",
      mahasiswa,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Terjadi kesalahan", detail: `${error}` },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const data = await prisma.mahasiswa.findMany({
      include: {
        universitas: true,
        prodi: true,
        ambil_matkul: {
          include: {
            matkul: true,
          },
        },
      },
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Gagal mengambil data" },
      { status: 500 }
    );
  }
}
