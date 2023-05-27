-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "firt_name" TEXT,
    "last_name" TEXT,
    "cpf" TEXT,
    "date_nascimento" TIMESTAMP(3),
    "escolaridade" TEXT,
    "sexo" TEXT,
    "profissao" TEXT,
    "naturalidade" TEXT,
    "endereco_id" TEXT,
    "estado_civil" TEXT,
    "conjuge_name" TEXT,
    "date_casamento" TIMESTAMP(3),
    "numero_filhos" INTEGER,
    "mae_name" TEXT,
    "pai_name" TEXT,
    "date_decisao" TIMESTAMP(3),
    "batizado" TEXT,
    "date_batismo" TIMESTAMP(3),
    "celula_id" TEXT,
    "situacao_no_reino" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
