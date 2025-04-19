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

    const univ = await prisma.university.upsert({
      where: { nama_univ: universitas.nama_univ },
      update: {}, // Tidak ada perubahan jika sudah ada
      create: {
        nama_univ: universitas.nama_univ,
        grade: universitas.grade as Grade, // Pastikan grade sesuai enum
      },
    });

    const prodi = await prisma.programStudi.upsert({
      where: { nama_prodi: program_studi.nama_prodi },
      update: {}, // Tidak ada perubahan jika sudah ada
      create: {
        nama_prodi: program_studi.nama_prodi,
        grade: program_studi.grade as Grade, // Pastikan grade sesuai enum
      },
    });

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
        const matkulData = await prisma.matkul.upsert({
          where: { nama_matkul: matkul.nama_matkul },
          update: {},
          create: {
            nama_matkul: matkul.nama_matkul,
            dosen: matkul.dosen,
          },
        });

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
    return NextResponse.json({ error: "Gagal mengambil data" }, { status: 500 });
  }
}
