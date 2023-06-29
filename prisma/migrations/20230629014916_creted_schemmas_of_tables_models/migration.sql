-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
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
    "situacao_no_reino" TEXT,
    "date_create" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_update" TIMESTAMP(3) NOT NULL,
    "celulaId" TEXT,
    "enderecoId" TEXT,
    "supervisaoId" TEXT,
    "escolaPrincId" TEXT,
    "escolaFundId" TEXT,
    "escolaDiscId" TEXT,
    "escolaOraId" TEXT,
    "escolaPrincipioId" TEXT,
    "escolaFundamentoId" TEXT,
    "escolaDiscipuloId" TEXT,
    "escolaOracaoId" TEXT,
    "encontroComDeusId" TEXT,
    "encontroDDId" TEXT,

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

    CONSTRAINT "Celula_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Supervisao" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "date_create" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_update" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Supervisao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EscolaPrincipio" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "date_create" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_update" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EscolaPrincipio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EscolaFundamento" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "date_create" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_update" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EscolaFundamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EscolaDiscipulo" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "date_create" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_update" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EscolaDiscipulo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EscolaOracao" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "date_create" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_update" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EscolaOracao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EncontroComDeus" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "date_create" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_update" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EncontroComDeus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EncontroDD" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "date_create" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_update" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EncontroDD_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_supervisaoId_fkey" FOREIGN KEY ("supervisaoId") REFERENCES "Supervisao"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_celulaId_fkey" FOREIGN KEY ("celulaId") REFERENCES "Celula"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_escolaPrincipioId_fkey" FOREIGN KEY ("escolaPrincipioId") REFERENCES "EscolaPrincipio"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_escolaFundamentoId_fkey" FOREIGN KEY ("escolaFundamentoId") REFERENCES "EscolaFundamento"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_escolaDiscipuloId_fkey" FOREIGN KEY ("escolaDiscipuloId") REFERENCES "EscolaDiscipulo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_escolaOracaoId_fkey" FOREIGN KEY ("escolaOracaoId") REFERENCES "EscolaOracao"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_encontroComDeusId_fkey" FOREIGN KEY ("encontroComDeusId") REFERENCES "EncontroComDeus"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_encontroDDId_fkey" FOREIGN KEY ("encontroDDId") REFERENCES "EncontroDD"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_enderecoId_fkey" FOREIGN KEY ("enderecoId") REFERENCES "Endereco"("id") ON DELETE SET NULL ON UPDATE CASCADE;
