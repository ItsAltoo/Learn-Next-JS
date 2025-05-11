"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface PersonItems {
  id: number;
  name: string;
  age: number;
}

export default function Home() {
  const [datas, setDatas] = useState<PersonItems[]>([]);
  const [form, setForm] = useState({ name: "", age: 0 });
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const fetchDataPerson = async () => {
    const res = await fetch(`api/person/`);
    const data = await res.json();
    setDatas(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedId == null) {
      // Create new person
      const res = await fetch(`api/person/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setForm({ name: "", age: 0 });
        fetchDataPerson();
      }
    } else {
      // Update existing person
      const res = await fetch(`api/person/${selectedId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setForm({ name: "", age: 0 });
        setSelectedId(null);
        fetchDataPerson();
      }
    }
  };

  const handleEdit = (item: PersonItems) => {
    setForm({ name: item.name, age: item.age });
    setSelectedId(item.id);
  };

  const handleDelete = async (id: number) => {
    const res = await fetch(`api/person/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      fetchDataPerson();
    }
  };

  useEffect(() => {
    fetchDataPerson();
  }, []);
  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="nama">Nama</label>
          <input
            className="border border-gray-300 rounded p-2"
            type="text"
            name="nama"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <label htmlFor="age">Age</label>
          <input
            className="border border-gray-300 rounded p-2"
            type="number"
            name="age"
            value={form.age}
            onChange={(e) =>
              setForm({ ...form, age: parseInt(e.target.value) })
            }
          />
          <Button>{selectedId === null ? "Tambah" : "Update"}</Button>
        </div>
      </form>

      <h1>Data Orang:</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-2xl">
        {datas.map((item) => (
          <div className="border border-black rounded-xl bg-zinc-400/20 p-3 mt-2" key={item.id}>
        <h1>{item.name}</h1>
        <p>{item.age}</p>

        <div className="flex gap-2">
          <Button onClick={() => handleEdit(item)}>Edit</Button>
          <Button
            onClick={() => handleDelete(item.id)}
            variant={"destructive"}
          >
            Delete
          </Button>
        </div>
          </div>
        ))}
      </div>


    </>
  );
}
