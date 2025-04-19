"use client";

import { useEffect, useState } from "react";

// Optional: Tipe untuk keamanan dan autocomplete
interface Mahasiswa {
  no_mahasiswa: number;
  nama_mahasiswa: string;
  tanggal_lahir: string;
  universitas: {
    nama_univ: string;
    grade: string;
  };
  prodi: {
    nama_prodi: string;
    grade: string;
  };
}

interface FormMahasiswa {
  nama_mahasiswa: string;
  tanggal_lahir: string;
  universitas: {
    nama_univ: string;
    grade: string;
  };
  program_studi: {
    nama_prodi: string;
    grade: string;
  };
  no_prodi: number; // Tambahkan ini
  no_univ: number;  // Tambahkan ini
}

export default function Home() {
  const [data, setData] = useState<Mahasiswa[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [form, setForm] = useState<FormMahasiswa>({
    nama_mahasiswa: "",
    tanggal_lahir: "",
    universitas: {
      nama_univ: "",
      grade: "A",
    },
    program_studi: {
      nama_prodi: "",
      grade: "A",
    },
    no_prodi: 0, // Tambahkan ini
    no_univ: 0,  // Tambahkan ini
  });

  const fetchData = async () => {
    const res = await fetch("/api/mahasiswa");
    const json = await res.json();
    setData(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = selectedId ? `/api/mahasiswa/${selectedId}` : "/api/mahasiswa";
    const method = selectedId ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        no_prodi: form.no_prodi, // Pastikan dikirim
        no_univ: form.no_univ,   // Pastikan dikirim
      }),
    });

    // Reset form setelah submit
    setForm({
      nama_mahasiswa: "",
      tanggal_lahir: "",
      universitas: {
        nama_univ: "",
        grade: "A",
      },
      program_studi: {
        nama_prodi: "",
        grade: "A",
      },
      no_prodi: 0,
      no_univ: 0,
    });
    setSelectedId(null);
    fetchData();
  };

  const handleDelete = async (id: number) => {
    await fetch(`/api/mahasiswa/${id}`, { method: "DELETE" });
    fetchData();
  };

  const handleEdit = (mhs: Mahasiswa) => {
    setForm({
      nama_mahasiswa: mhs.nama_mahasiswa,
      tanggal_lahir: mhs.tanggal_lahir.slice(0, 10),
      universitas: {
        nama_univ: mhs.universitas?.nama_univ || "",
        grade: mhs.universitas?.grade || "A",
      },
      program_studi: {
        nama_prodi: mhs.prodi?.nama_prodi || "",
        grade: mhs.prodi?.grade || "A",
      },
      no_prodi: 0, // Tambahkan ini
      no_univ: 0,  // Tambahkan ini
    });
    setSelectedId(mhs.no_mahasiswa);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Form Tambah Mahasiswa</h1>
      <form onSubmit={handleSubmit} className="space-y-2 mb-6">
        <input
          type="text"
          placeholder="Nama Mahasiswa"
          value={form.nama_mahasiswa}
          onChange={(e) => setForm({ ...form, nama_mahasiswa: e.target.value })}
          className="border p-2 w-full"
          required
        />
        <input
          type="date"
          value={form.tanggal_lahir}
          onChange={(e) => setForm({ ...form, tanggal_lahir: e.target.value })}
          className="border p-2 w-full"
          required
        />
        <input
          type="text"
          placeholder="Nama Universitas"
          value={form.universitas.nama_univ}
          onChange={(e) =>
            setForm({
              ...form,
              universitas: {
                ...form.universitas,
                nama_univ: e.target.value,
              },
            })
          }
          className="border p-2 w-full"
          required
        />
        <input
          type="text"
          placeholder="Nama Prodi"
          value={form.program_studi.nama_prodi}
          onChange={(e) =>
            setForm({
              ...form,
              program_studi: {
                ...form.program_studi,
                nama_prodi: e.target.value,
              },
            })
          }
          className="border p-2 w-full"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {selectedId ? "Update Mahasiswa" : "Tambah Mahasiswa"}
        </button>
      </form>

      <h2 className="text-xl font-semibold mb-2">Daftar Mahasiswa</h2>
      <table className="w-full border border-gray-300 text-left">
        <thead>
          <tr>
            <th className="p-2 border">No</th>
            <th className="p-2 border">Nama</th>
            <th className="p-2 border">Tanggal Lahir</th>
            <th className="p-2 border">Program Studi</th>
            <th className="p-2 border">Universitas</th>
            <th className="p-2 border">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((mhs, index) => (
            <tr key={mhs.no_mahasiswa}>
              <td className="p-2 border">{index + 1}</td>
              <td className="p-2 border">{mhs.nama_mahasiswa}</td>
              <td className="p-2 border">
                {new Date(mhs.tanggal_lahir).toLocaleDateString()}
              </td>
              <td className="p-2 border">{mhs.prodi?.nama_prodi || "N/A"}</td>
              <td className="p-2 border">
                {mhs.universitas?.nama_univ || "N/A"}
              </td>
              <td className="p-2 border space-x-2">
                <button
                  onClick={() => handleEdit(mhs)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(mhs.no_mahasiswa)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
