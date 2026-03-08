/*
  Warnings:

  - You are about to drop the column `icon` on the `Technology` table. All the data in the column will be lost.
  - Added the required column `iconName` to the `Technology` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "year" INTEGER;

-- AlterTable
ALTER TABLE "Technology" DROP COLUMN "icon",
ADD COLUMN     "iconName" TEXT NOT NULL;
