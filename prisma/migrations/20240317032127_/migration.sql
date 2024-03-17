/*
  Warnings:

  - You are about to drop the column `matchDay` on the `Fixture` table. All the data in the column will be lost.
  - Added the required column `role` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `joinDate` on the `Player` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Head" AS ENUM ('MANAGER', 'FOUNDER', 'CO_FOUNDER');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('PLAYER', 'CAPTAIN', 'V_CAPTAIN');

-- AlterTable
ALTER TABLE "Fixture" DROP COLUMN "matchDay",
ADD COLUMN     "isArchive" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "myTeamResult" DROP NOT NULL,
ALTER COLUMN "opponentTeamResult" DROP NOT NULL,
ALTER COLUMN "matchResult" DROP NOT NULL;

-- AlterTable
ALTER TABLE "History" ADD COLUMN     "isArchive" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "HomePage" ADD COLUMN     "isArchive" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "OpponentTeam" ADD COLUMN     "isArchive" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Player" ADD COLUMN     "head" "Head",
ADD COLUMN     "isArchive" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "role" "Role" NOT NULL,
DROP COLUMN "joinDate",
ADD COLUMN     "joinDate" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "PlayerMatches" ADD COLUMN     "isArchive" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isArchive" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "Achievement" (
    "id" SERIAL NOT NULL,
    "year" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "assetUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Achievement_pkey" PRIMARY KEY ("id")
);
