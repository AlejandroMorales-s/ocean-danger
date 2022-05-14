-- CreateTable
CREATE TABLE "about_region" (
    "id" SERIAL NOT NULL,
    "population" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL,
    "location" VARCHAR(165) NOT NULL,

    CONSTRAINT "about_region_pkey" PRIMARY KEY ("id")
);
