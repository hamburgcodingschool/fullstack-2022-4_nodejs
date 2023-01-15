CREATE TABLE `characters` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` text,
  `race` text,
  `actor` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `characters` (`id`, `name`, `race`, `actor`) VALUES
(1, 'Frodo Baggins', 'Hobbit', 'Elijah Wood'),
(2, 'Gandalf', 'Maia', 'Ian McKellen'),
(3, 'Aragorn', 'Human', 'Viggo Mortensen'),
(4, 'Legolas', 'Elf', 'Orlando Bloom'),
(5, 'Gollum', 'Stoor hobbit', 'Andy Serkis'),
(6, 'Boromir', 'Human', 'Sean Bean'),
(7, 'Samwise Gamgee', 'Hobbit', 'Sean Astin'),
(8, 'Peregrin Took', 'Hobbit', 'Billy Boyd'),
(9, 'Meriadoc Brandybuck', 'Hobbit', 'Dominic Monaghan');