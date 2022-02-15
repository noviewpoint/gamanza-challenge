/*
  Warnings:

  - You are about to drop the `_GameToPlayer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_GameToPlayer" DROP CONSTRAINT "_GameToPlayer_A_fkey";

-- DropForeignKey
ALTER TABLE "_GameToPlayer" DROP CONSTRAINT "_GameToPlayer_B_fkey";

-- AlterTable
ALTER TABLE "Player"
    ADD COLUMN "gameId" INTEGER,
ALTER
COLUMN "credits" SET DEFAULT 0,
ALTER
COLUMN "joinedOn" SET DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "_GameToPlayer";

-- AddForeignKey
ALTER TABLE "Player"
    ADD CONSTRAINT "Player_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
