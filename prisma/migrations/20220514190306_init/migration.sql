/*
  Warnings:

  - You are about to drop the column `feeding` on the `species` table. All the data in the column will be lost.
  - Added the required column `diet` to the `species` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lifeExpectancy` to the `species` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "species" DROP COLUMN "feeding",
ADD COLUMN     "diet" VARCHAR(65) NOT NULL,
ADD COLUMN     "lifeExpectancy" VARCHAR(165) NOT NULL;
