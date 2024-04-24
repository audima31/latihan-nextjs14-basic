-- AlterTable
ALTER TABLE `collection` ADD COLUMN `background` VARCHAR(191) NULL,
    ADD COLUMN `popularity` INTEGER NULL,
    ADD COLUMN `score` INTEGER NULL,
    ADD COLUMN `synopsis` VARCHAR(191) NULL,
    ADD COLUMN `year` INTEGER NULL,
    MODIFY `anime_image` VARCHAR(191) NULL,
    MODIFY `anime_title` VARCHAR(191) NULL;
