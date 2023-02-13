-- CreateTable
CREATE TABLE "Usuarios" (
    "CodUso" SERIAL NOT NULL,
    "Email" TEXT NOT NULL,
    "Nome" TEXT NOT NULL,
    "SobreNome" TEXT NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3),

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("CodUso")
);

-- CreateTable
CREATE TABLE "Posts" (
    "CodPost" SERIAL NOT NULL,
    "Post" TEXT NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3),
    "CodUso" INTEGER,

    CONSTRAINT "Posts_pkey" PRIMARY KEY ("CodPost")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_Email_key" ON "Usuarios"("Email");

-- AddForeignKey
ALTER TABLE "Posts" ADD CONSTRAINT "Posts_CodUso_fkey" FOREIGN KEY ("CodUso") REFERENCES "Usuarios"("CodUso") ON DELETE SET NULL ON UPDATE CASCADE;
