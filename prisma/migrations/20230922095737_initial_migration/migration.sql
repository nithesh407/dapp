-- CreateTable
CREATE TABLE `Client` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `profile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `mobileNumber` VARCHAR(191) NOT NULL,
    `aadharNumber` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Client_aadharNumber_key`(`aadharNumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Judge` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `profile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `mobileNumber` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `uid` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `courtType` VARCHAR(191) NOT NULL,
    `district` VARCHAR(191) NULL,

    UNIQUE INDEX `Judge_uid_key`(`uid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Lawyer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `profile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `mobileNumber` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `bar` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `courtType` VARCHAR(191) NOT NULL,
    `district` VARCHAR(191) NULL,

    UNIQUE INDEX `Lawyer_bar_key`(`bar`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Casename` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `casename` VARCHAR(191) NOT NULL,
    `casenumber` VARCHAR(191) NOT NULL,
    `casetype` VARCHAR(191) NOT NULL,
    `startdate` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Casename_casenumber_key`(`casenumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Casefile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `casename` VARCHAR(191) NOT NULL,
    `casenumber` VARCHAR(191) NOT NULL,
    `cid` VARCHAR(191) NOT NULL,
    `filename` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Casefile_cid_key`(`cid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
