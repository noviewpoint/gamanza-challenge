/*
  Warnings:

  - You are about to drop the column `gameId` on the `Player` table. All the data in the column will be lost.
  - Made the column `description` on table `Game` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `joinedOn` to the `Player` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Player" DROP CONSTRAINT "Player_gameId_fkey";

-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "endedOn" TIMESTAMP(3),
ADD COLUMN     "startedOn" TIMESTAMP(3),
ALTER COLUMN "description" SET NOT NULL;

-- AlterTable
ALTER TABLE "Player" DROP COLUMN "gameId",
ADD COLUMN     "joinedOn" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "_GameToPlayer" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_GameToPlayer_AB_unique" ON "_GameToPlayer"("A", "B");

-- CreateIndex
CREATE INDEX "_GameToPlayer_B_index" ON "_GameToPlayer"("B");

-- AddForeignKey
ALTER TABLE "_GameToPlayer" ADD FOREIGN KEY ("A") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameToPlayer" ADD FOREIGN KEY ("B") REFERENCES "Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;
