CREATE DATABASE IF NOT EXISTS `crawl-aftv`;

DROP TABLE IF EXISTS `crawl-aftv`.`hello`;

CREATE TABLE IF NOT EXISTS `crawl-aftv`.`rooms` (
  `num`         BIGINT(11)   NOT NULL AUTO_INCREMENT,
  `id`       VARCHAR(50)  NOT NULL,
  `date`        VARCHAR(50)    NOT NULL,
  UNIQUE KEY (`id`,`date`),
  PRIMARY KEY (`num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `crawl-aftv`.`users` (
  `num`         BIGINT(11)   NOT NULL AUTO_INCREMENT,
  `id`       VARCHAR(50)  NOT NULL,
  `pw`        VARCHAR(50)    NOT NULL,
  PRIMARY KEY (`num`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;