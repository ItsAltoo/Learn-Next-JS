-- CreateTable
CREATE TABLE `University` (
    `no_univ` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_aniv` VARCHAR(191) NOT NULL,
    `grade` ENUM('A', 'B', 'C', 'D') NOT NULL,

    PRIMARY KEY (`no_univ`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProgramStudi` (
    `no_prodi` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_prodi` VARCHAR(191) NOT NULL,
    `grade` ENUM('A', 'B', 'C', 'D') NOT NULL,

    PRIMARY KEY (`no_prodi`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Matkul` (
    `no_matkul` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_matkul` VARCHAR(191) NOT NULL,
    `dosen` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`no_matkul`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mahasiswa` (
    `no_mahasiswa` INTEGER NOT NULL AUTO_INCREMENT,
    `no_prodi` INTEGER NOT NULL,
    `no_univ` INTEGER NOT NULL,
    `nama_mahasiswa` VARCHAR(191) NOT NULL,
    `tanggal_lahir` DATETIME(3) NOT NULL,

    PRIMARY KEY (`no_mahasiswa`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AmbilMatkul` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `no_mahasiswa` INTEGER NOT NULL,
    `no_matkul` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Mahasiswa` ADD CONSTRAINT `Mahasiswa_no_prodi_fkey` FOREIGN KEY (`no_prodi`) REFERENCES `ProgramStudi`(`no_prodi`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mahasiswa` ADD CONSTRAINT `Mahasiswa_no_univ_fkey` FOREIGN KEY (`no_univ`) REFERENCES `University`(`no_univ`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AmbilMatkul` ADD CONSTRAINT `AmbilMatkul_no_mahasiswa_fkey` FOREIGN KEY (`no_mahasiswa`) REFERENCES `Mahasiswa`(`no_mahasiswa`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AmbilMatkul` ADD CONSTRAINT `AmbilMatkul_no_matkul_fkey` FOREIGN KEY (`no_matkul`) REFERENCES `Matkul`(`no_matkul`) ON DELETE RESTRICT ON UPDATE CASCADE;
