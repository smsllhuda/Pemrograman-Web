<?php

// Use correct directory separators and verify paths
require_once __DIR__ . '/Traits/Describabel.php';
require_once __DIR__ . '/Models/Book.php';
require_once __DIR__ . '/Models/Fiction.php';
require_once __DIR__ . '/Models/NonFiction.php';
require_once __DIR__ . '/Controllers/BookControllers.php';

use Controllers\BookController;

// Create instance of BookController
$controller = new BookController();

try {
    // Create and display fiction book details
    $fictionBook = $controller->createFictionBook("Before the coffee gets cold<br>", "Toshikazu Kawaguchi<br>");
    echo $fictionBook->getDescription() . " - Genre:" . $fictionBook->getGenre() . PHP_EOL;

    // Create and display non-fiction book details
    $nonFictionBook = $controller->createNonFictionBook("Sapiens<br>", "Yuval Noah Harari<br>");
    echo $nonFictionBook->getDescription() . " - Genre:" . $nonFictionBook->getGenre() . PHP_EOL;
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}