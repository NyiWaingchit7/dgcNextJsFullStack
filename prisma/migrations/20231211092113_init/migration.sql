-- CreateEnum
CREATE TYPE "Result" AS ENUM ('WIN', 'DRAW', 'LOSE');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HomePage" (
    "id" SERIAL NOT NULL,
    "assetUrl" TEXT,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HomePage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Player" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "city" TEXT NOT NULL,
    "joinDate" TIMESTAMP(3) NOT NULL,
    "assetUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayerMatches" (
    "id" SERIAL NOT NULL,
    "playerId" INTEGER NOT NULL,
    "win" INTEGER NOT NULL DEFAULT 0,
    "draw" INTEGER NOT NULL DEFAULT 0,
    "lose" INTEGER NOT NULL DEFAULT 0,
    "winRate" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PlayerMatches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OpponentTeam" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "assetUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OpponentTeam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fixture" (
    "id" SERIAL NOT NULL,
    "myTeam" TEXT NOT NULL DEFAULT 'Red Dragon',
    "opponentTeamId" INTEGER NOT NULL,
    "matchDay" TIMESTAMP(3) NOT NULL,
    "myTeamResult" INTEGER NOT NULL DEFAULT 0,
    "opponentTeamResult" INTEGER NOT NULL DEFAULT 0,
    "matchResult" "Result" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Fixture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "History" (
    "id" SERIAL NOT NULL,
    "year" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "History_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PlayerMatches" ADD CONSTRAINT "PlayerMatches_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fixture" ADD CONSTRAINT "Fixture_opponentTeamId_fkey" FOREIGN KEY ("opponentTeamId") REFERENCES "OpponentTeam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
