/*
  Warnings:

  - You are about to drop the column `date_update` on the `Supervisao` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Celula" ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "Supervisao" DROP COLUMN "date_update",
ADD COLUMN     "userId" TEXT;

-- AddForeignKey
ALTER TABLE "Celula" ADD CONSTRAINT "Celula_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Supervisao" ADD CONSTRAINT "Supervisao_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
