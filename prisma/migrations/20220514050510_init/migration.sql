-- CreateTable
CREATE TABLE "species" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cientificName" VARCHAR(155) NOT NULL,
    "region" VARCHAR(65) NOT NULL,
    "maxWeight" INTEGER NOT NULL,
    "minWeight" INTEGER NOT NULL,
    "color" VARCHAR(65) NOT NULL,
    "feeding" VARCHAR(165) NOT NULL,

    CONSTRAINT "species_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "species_name_key" ON "species"("name");
