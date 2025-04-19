/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Mahasiswa` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `mahasiswa` MODIFY `nama` VARCHAR(255) NOT NULL,
    MODIFY `jurusan` VARCHAR(255) NOT NULL,
    MODIFY `angkatan` INTEGER NOT NULL DEFAULT 2023,
    MODIFY `email` VARCHAR(255) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Mahasiswa_email_key` ON `Mahasiswa`(`email`);
