/*
  Warnings:

  - You are about to drop the column `encontroComDeusId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `encontroDDId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `escolaDiscId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `escolaDiscipuloId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `escolaFundId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `escolaFundamentoId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `escolaOraId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `escolaOracaoId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `escolaPrincId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `escolaPrincipioId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `EncontroComDeus` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EncontroDD` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EscolaDiscipulo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EscolaFundamento` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EscolaOracao` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EscolaPrincipio` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_encontroComDeusId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_encontroDDId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_escolaDiscipuloId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_escolaFundamentoId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_escolaOracaoId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_escolaPrincipioId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "encontroComDeusId",
DROP COLUMN "encontroDDId",
DROP COLUMN "escolaDiscId",
DROP COLUMN "escolaDiscipuloId",
DROP COLUMN "escolaFundId",
DROP COLUMN "escolaFundamentoId",
DROP COLUMN "escolaOraId",
DROP COLUMN "escolaOracaoId",
DROP COLUMN "escolaPrincId",
DROP COLUMN "escolaPrincipioId";

-- DropTable
DROP TABLE "EncontroComDeus";

-- DropTable
DROP TABLE "EncontroDD";

-- DropTable
DROP TABLE "EscolaDiscipulo";

-- DropTable
DROP TABLE "EscolaFundamento";

-- DropTable
DROP TABLE "EscolaOracao";

-- DropTable
DROP TABLE "EscolaPrincipio";

-- CreateTable
CREATE TABLE "Escolas" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "date_create" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_update" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Escolas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Encontros" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "date_create" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_update" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Encontros_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EscolasToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EncontrosToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_EscolasToUser_AB_unique" ON "_EscolasToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_EscolasToUser_B_index" ON "_EscolasToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EncontrosToUser_AB_unique" ON "_EncontrosToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_EncontrosToUser_B_index" ON "_EncontrosToUser"("B");

-- AddForeignKey
ALTER TABLE "_EscolasToUser" ADD CONSTRAINT "_EscolasToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Escolas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EscolasToUser" ADD CONSTRAINT "_EscolasToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EncontrosToUser" ADD CONSTRAINT "_EncontrosToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Encontros"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EncontrosToUser" ADD CONSTRAINT "_EncontrosToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
