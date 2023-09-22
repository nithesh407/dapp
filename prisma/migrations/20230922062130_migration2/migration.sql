/*
  Warnings:

  - You are about to drop the column `bar` on the `Casefile` table. All the data in the column will be lost.
  - You are about to drop the column `bar` on the `Casename` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Casename` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[casenumber]` on the table `Casename` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `casenumber` to the `Casefile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `filename` to the `Casefile` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Casefile_bar_key` ON `Casefile`;

-- DropIndex
DROP INDEX `Casename_bar_key` ON `Casename`;

-- AlterTable
ALTER TABLE `Casefile` DROP COLUMN `bar`,
    ADD COLUMN `casenumber` VARCHAR(191) NOT NULL,
    ADD COLUMN `filename` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Casename` DROP COLUMN `bar`,
    DROP COLUMN `name`;

-- CreateIndex
CREATE UNIQUE INDEX `Casename_casenumber_key` ON `Casename`(`casenumber`);
