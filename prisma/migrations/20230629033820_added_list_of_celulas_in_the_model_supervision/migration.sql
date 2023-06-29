-- AlterTable
ALTER TABLE "Celula" ADD COLUMN     "supervisaoId" TEXT;

-- AddForeignKey
ALTER TABLE "Celula" ADD CONSTRAINT "Celula_supervisaoId_fkey" FOREIGN KEY ("supervisaoId") REFERENCES "Supervisao"("id") ON DELETE SET NULL ON UPDATE CASCADE;
