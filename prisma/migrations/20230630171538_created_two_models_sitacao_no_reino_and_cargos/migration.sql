/*
  Warnings:

  - You are about to drop the column `situacao_no_reino` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "situacao_no_reino",
ADD COLUMN     "cargoDeLiderancaId" TEXT,
ADD COLUMN     "photoPerfil" TEXT,
ADD COLUMN     "situacaoNoReinoId" TEXT;

-- CreateTable
CREATE TABLE "SituacaoNoReino" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "date_create" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_update" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SituacaoNoReino_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CargoDeLideranca" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "date_create" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_update" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CargoDeLideranca_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_situacaoNoReinoId_fkey" FOREIGN KEY ("situacaoNoReinoId") REFERENCES "SituacaoNoReino"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_cargoDeLiderancaId_fkey" FOREIGN KEY ("cargoDeLiderancaId") REFERENCES "CargoDeLideranca"("id") ON DELETE SET NULL ON UPDATE CASCADE;
