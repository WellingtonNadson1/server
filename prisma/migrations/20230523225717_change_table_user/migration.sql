/*
  Warnings:

  - Added the required column `date_update` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "date_create" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "date_update" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "telefone_celular" TEXT;
