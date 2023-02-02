CREATE TABLE `characters` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` text,
  `race` text,
  `actor` text,
  `image` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `characters` (`id`, `name`, `race`, `actor`, `image`) VALUES
(1, 'Frodo Baggins', 'Hobbit', 'Elijah Wood', 'Frodo.png'),
(2, 'Gandalf', 'Maia', 'Ian McKellen', 'Gandalf.png'),
(3, 'Aragorn', 'Human', 'Viggo Mortensen', 'Aragorn.png'),
(4, 'Legolas', 'Elf', 'Orlando Bloom', 'Legolas.png'),
(5, 'Gollum', 'Stoor hobbit', 'Andy Serkis', 'Gollum.png'),
(6, 'Boromir', 'Human', 'Sean Bean', 'Boromir.png'),
(7, 'Samwise Gamgee', 'Hobbit', 'Sean Astin', 'Samwise.png'),
(8, 'Peregrin Took', 'Hobbit', 'Billy Boyd', 'Peregrin.png'),
(9, 'Meriadoc Brandybuck', 'Hobbit', 'Dominic Monaghan', 'Meriadoc.png'),
(10, 'Gimli', 'Dwarf', 'John Rhys-Davies', 'Gimli.png')
