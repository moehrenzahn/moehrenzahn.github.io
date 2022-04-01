#!/usr/bin/php

<?php
$date = (new DateTime())->format('Y-m-d');
$title = $argv[1] ?? 'painting';

$filePath = implode('/', [
    __DIR__,
    '..',
    '_paintings',
    prepareFilename($date, $title),
]);

$templateParts = [
    '---',
    'title: ' . $title,
    'file: /paintings/' . $date . '-' . $title . '.jpg',
    'date: ' . $date,
    'size: 20×20cm',
    'materials: Acrylics on canvas board',
    'featured: no',
    '---',
];

echo "Creating file '$filePath' …" . PHP_EOL;

file_put_contents(
    $filePath,
    implode(PHP_EOL, $templateParts) . PHP_EOL . PHP_EOL
);

exec("open $filePath");

function prepareFilename(string $date, string $title): string
{
    $title = strtolower($title);
    $title = str_replace([' ', '–', '—', '|', '/', '\\', '&', '#'], '-', $title);

    while (strpos($title, '--') !== false) {
        $title = str_replace('--', '-', $title);
    }

    return "$date-$title.md";
}
