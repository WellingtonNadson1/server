/*
  Warnings:

  - You are about to drop the column `firt_name` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "firt_name",
ADD COLUMN     "first_name" TEXT;
