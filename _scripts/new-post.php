#!/usr/bin/php

<?php
$date = (new DateTime())->format('Y-m-d');
$title = 'Draft';

$url = $argv[1] ?? '';
if ($url) {
    echo "Parsing URL '$url' …" . PHP_EOL;
    $content = file_get_contents($url);
    if ($content) {
        $title = getTitleFromHtml($content);
        echo "Using title '$title' …" . PHP_EOL;
    } else {
        $url = '';
    }
}
$filePath = implode('/', [
    __DIR__,
    '..',
    '_posts',
    prepareFilename($date, $title),
]);

$templateParts = [
    '---',
    'layout: post',
    "title: $title",
    'categories: []'
];

if ($url) {
    $templateParts[] = "link: $url";
}

$templateParts[] = '---';

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

function getTitleFromHtml(string $html): string
{
    $dom = new DOMDocument();
    @$dom->loadHTML($html);
    $title = $dom->getElementsByTagName('title')[0] ?? '';
    $title = trim($title->textContent);

    return $title;
}
