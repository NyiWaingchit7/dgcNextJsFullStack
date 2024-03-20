/*
  Warnings:

  - Made the column `ended` on table `Event` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Event" ALTER COLUMN "ended" SET NOT NULL,
ALTER COLUMN "ended" SET DEFAULT false;
