CREATE SCHEMA IF NOT EXISTS cardle;

CREATE TABLE IF NOT EXISTS `make`
(
    `id`   CHAR(36)     NOT NULL,
    `name` VARCHAR(128) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `UNIQ_MAKE_NAME` (`name`)
);

CREATE TABLE IF NOT EXISTS `game`
(
    `id`         CHAR(36)    NOT NULL,
    `game_start` DATETIME    NOT NULL,
    `game_end`   DATETIME    NOT NULL,
    `make_id`    CHAR(36)    NOT NULL,
    `word_type`  VARCHAR(20) NOT NULL DEFAULT 'MAKE',

    PRIMARY KEY (`id`),
    CONSTRAINT `FK_MAKE` FOREIGN KEY (`make_id`) REFERENCES `make` (`id`)
);
