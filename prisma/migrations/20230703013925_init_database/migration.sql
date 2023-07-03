-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "photoPerfil" TEXT,
    "email" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "cpf" TEXT,
    "dateNasc" TIMESTAMP(3),
    "sexo" TEXT,
    "telefone" TEXT,
    "escolaridade" TEXT,
    "profissao" TEXT,
    "batizado" TEXT,
    "dateBatizado" TIMESTAMP(3),
    "isDiscipulado" TEXT,
    "discipulador" TEXT,
    "estadoCivil" TEXT,
    "nomeConjuge" TEXT,
    "dateCasamento" TIMESTAMP(3),
    "hasFilho" TEXT,
    "quantidadeFilho" INTEGER,
    "dateDecisao" TIMESTAMP(3),
    "date_create" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_update" TIMESTAMP(3) NOT NULL,
    "celulaId" TEXT,
    "enderecoId" TEXT,
    "supervisaoId" TEXT,
    "situacaoNoReinoId" TEXT,
    "cargoDeLiderancaId" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Endereco" (
    "id" TEXT NOT NULL,
    "cep" TEXT,
    "cidade" TEXT,
    "estado" TEXT,
    "endereco" TEXT,
    "date_create" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_update" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Endereco_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Celula" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "date_create" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_update" TIMESTAMP(3) NOT NULL,
    "supervisaoId" TEXT,
    "userId" TEXT,

    CONSTRAINT "Celula_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Supervisao" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cor" TEXT NOT NULL,
    "date_create" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_update" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,
    "nivelSupervisaoId" TEXT,

    CONSTRAINT "Supervisao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NivelSupervisao" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "NivelSupervisao_pkey" PRIMARY KEY ("id")
);

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
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_EscolasToUser_AB_unique" ON "_EscolasToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_EscolasToUser_B_index" ON "_EscolasToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EncontrosToUser_AB_unique" ON "_EncontrosToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_EncontrosToUser_B_index" ON "_EncontrosToUser"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_supervisaoId_fkey" FOREIGN KEY ("supervisaoId") REFERENCES "Supervisao"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_celulaId_fkey" FOREIGN KEY ("celulaId") REFERENCES "Celula"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_enderecoId_fkey" FOREIGN KEY ("enderecoId") REFERENCES "Endereco"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_situacaoNoReinoId_fkey" FOREIGN KEY ("situacaoNoReinoId") REFERENCES "SituacaoNoReino"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_cargoDeLiderancaId_fkey" FOREIGN KEY ("cargoDeLiderancaId") REFERENCES "CargoDeLideranca"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Celula" ADD CONSTRAINT "Celula_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Celula" ADD CONSTRAINT "Celula_supervisaoId_fkey" FOREIGN KEY ("supervisaoId") REFERENCES "Supervisao"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Supervisao" ADD CONSTRAINT "Supervisao_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Supervisao" ADD CONSTRAINT "Supervisao_nivelSupervisaoId_fkey" FOREIGN KEY ("nivelSupervisaoId") REFERENCES "NivelSupervisao"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EscolasToUser" ADD CONSTRAINT "_EscolasToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Escolas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EscolasToUser" ADD CONSTRAINT "_EscolasToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EncontrosToUser" ADD CONSTRAINT "_EncontrosToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Encontros"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EncontrosToUser" ADD CONSTRAINT "_EncontrosToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
