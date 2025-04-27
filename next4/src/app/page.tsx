"use client";

import { useEffect, useState } from "react";

interface Mahasiswa {
  id: number;
  nama: string;
  nim: string;
  jurusan: string;
  angkatan: number;
  email: string;
}

export default function MahasiswaPage() {
  const [mahasiswaList, setMahasiswaList] = useState<Mahasiswa[]>([]);
  const [formData, setFormData] = useState<Omit<Mahasiswa, "id">>({
    nama: "",
    nim: "",
    jurusan: "".toUpperCase(),
    angkatan: 2025,
    email: "",
  });
  const [editId, setEditId] = useState<number | null>(null);

  // Fetch data dari backend
  const getData = async () => {
    const res = await fetch("/api/mahasiswa");
    const data = await res.json();
    setMahasiswaList(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const data = {
      ...formData,
      angkatan: Number(formData.angkatan), // pastikan angkatan bertipe number
    };
  
    if (editId !== null) {
      await fetch(`/api/mahasiswa/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setEditId(null);
    } else {
      await fetch("/api/mahasiswa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    }
  
    setFormData({ nama: "", nim: "", jurusan: "", angkatan: 2025, email: "" });
    getData();
  };
  

  const handleEdit = (mhs: Mahasiswa) => {
    setFormData({
      nama: mhs.nama,
      nim: mhs.nim,
      jurusan: mhs.jurusan.toUpperCase(),
      angkatan: mhs.angkatan,
      email: mhs.email,
    });
    setEditId(mhs.id);
  };

  const handleDelete = async (id: number) => {
    await fetch(`/api/mahasiswa/${id}`, { method: "DELETE" });
    getData();
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">CRUD Mahasiswa</h1>

      {/* Form Input */}
      <form
        className="flex flex-col my-3 gap-4 border p-3 rounded"
        onSubmit={handleSubmit}
        method="GET"
      >
        <input
          type="text"
          name="nama"
          placeholder="Nama"
          required
          onChange={handleChange}
          value={formData.nama}
        />
        <input
          type="text"
          name="nim"
          placeholder="NIM"
          required
          onChange={handleChange}
          value={formData.nim}
        />
        <input
          type="text"
          name="jurusan"
          placeholder="Jurusan"
          required
          onChange={handleChange}
          value={formData.jurusan}
        />
        <input
          type="number"
          name="angkatan"
          placeholder="Angkatan"
          required
          onChange={handleChange}
          value={formData.angkatan}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
          value={formData.email}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          type="submit"
        >
          {editId ? "Update" : "Simpan"}
        </button>
      </form>

      {/* Tabel Mahasiswa */}
      <table className="w-full border border-gray-300">
        <thead className="">
          <tr>
            <th className="border px-2 py-1">Nama</th>
            <th className="border px-2 py-1">NIM</th>
            <th className="border px-2 py-1">Jurusan</th>
            <th className="border px-2 py-1">Angkatan</th>
            <th className="border px-2 py-1">Email</th>
            <th className="border px-2 py-1">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {mahasiswaList.map((mhs) => (
            <tr key={mhs.id}>
              <td className="border px-2 py-1">{mhs.nama}</td>
              <td className="border px-2 py-1">{mhs.nim}</td>
              <td className="border px-2 py-1">{mhs.jurusan}</td>
              <td className="border px-2 py-1">{mhs.angkatan}</td>
              <td className="border px-2 py-1">{mhs.email}</td>
              <td className="border px-2 py-1 space-x-2">
                <button
                  onClick={() => handleEdit(mhs)}
                  className="bg-yellow-400 text-white px-2 py-1 rounded mb-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(mhs.id)}
                  className="bg-red-600 text-white px-2 py-1 rounded"
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
