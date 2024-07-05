-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "foto" BYTEA,
    "role" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Amenitas" (
    "id_amn" SERIAL NOT NULL,
    "lokasi" TEXT NOT NULL,
    "kategori_amn" TEXT NOT NULL,
    "daftar_amn" TEXT NOT NULL,
    "gambarlokasiamn" BYTEA NOT NULL,
    "videolokasiamn" BYTEA NOT NULL,

    CONSTRAINT "Amenitas_pkey" PRIMARY KEY ("id_amn")
);

-- CreateTable
CREATE TABLE "Datapendukung" (
    "dtwid" INTEGER NOT NULL,
    "amnid" INTEGER NOT NULL,
    "jmlhkunjungan" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Dtw" (
    "id_dtw" SERIAL NOT NULL,
    "lokasi" TEXT NOT NULL,
    "kategori_dtw" TEXT NOT NULL,
    "daftar_dtw" TEXT NOT NULL,
    "gambarlokasidtw" BYTEA NOT NULL,
    "videolokasidtw" BYTEA NOT NULL,

    CONSTRAINT "Dtw_pkey" PRIMARY KEY ("id_dtw")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "ttl" TEXT NOT NULL,
    "instansi" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_uuid_key" ON "Admin"("uuid");

-- CreateIndex
CREATE INDEX "Datapendukung_dtwid_idx" ON "Datapendukung"("dtwid");

-- CreateIndex
CREATE UNIQUE INDEX "Datapendukung_amnid_key" ON "Datapendukung"("amnid");

-- AddForeignKey
ALTER TABLE "Datapendukung" ADD CONSTRAINT "Datapendukung_dtwid_fkey" FOREIGN KEY ("dtwid") REFERENCES "Dtw"("id_dtw") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Datapendukung" ADD CONSTRAINT "Datapendukung_amnid_fkey" FOREIGN KEY ("amnid") REFERENCES "Amenitas"("id_amn") ON DELETE RESTRICT ON UPDATE CASCADE;
