#!/usr/bin/env php
<?php
$cmsRootPath = __DIR__ . "/..";
$date = (new DateTime())->format('Y-m-d');
$title = $argv[1] ?? 'painting';
$inputFilePath = $argv[2] ?? null;

if (count($argv) <= 1) {
    echo "new-painting.php" . PHP_EOL;
    echo PHP_EOL;    
    echo "Usage: new-painting.php 'Title of my Painting' path/to/painting.jpg" . PHP_EOL;    
    exit(0);
}

$mdFilename = prepareFilename($date, $title) . ".md";
$imageFilename = prepareFilename($date, $title) . ".jpg";

if ($inputFilePath) {
    $imageFileDir = "$cmsRootPath/paintings";
    $imageFilePath = "$imageFileDir/$imageFilename";
    echo "Creating file '$imageFilePath' …" . PHP_EOL;
    $success = copy($inputFilePath, $imageFilePath, null);
    if ($success === false) {
        echo "Error: Could not create file '$imageFilePath'" . PHP_EOL;    
        exit(1);
    }
    // Resize to fit image into 1000px square
    $convertScript = "/opt/homebrew/bin/convert '$imageFilePath' -resize '1000x1000>' '$imageFilePath'";
    $success = exec($convertScript);
    if ($success === false) {
        echo $success;
        echo $convertScript . PHP_EOL;
        echo "Error: Could not resize file '$imageFilePath'" . PHP_EOL;    
        exit(1);
    }
}

$mdFilePath = "$cmsRootPath/_paintings/$mdFilename";

$templateParts = [
    '---',
    "title: \"$title\"",
    'file: /paintings/' . $imageFilename,
    'date: ' . $date,
    'size: 20×20cm',
    'materials: Acrylics on canvas board',
    'featured: no',
    '---',
];

echo "Creating file '$mdFilePath' …" . PHP_EOL;

$success = file_put_contents(
    $mdFilePath,
    implode(PHP_EOL, $templateParts) . PHP_EOL . PHP_EOL
);
if ($success === false) {
    echo "Error: Could not create file '$mdFilePath'" . PHP_EOL;    
    exit(1);
}

exec("open $mdFilePath");
exec("$cmsRootPath/_scripts/generate-thumbnails.py");

function prepareFilename(string $date, string $title): string
{
    $title = strtolower($title);
    $title = str_replace([' ', '–', '—', '|', '/', '\\', '&', '#'], '-', $title);

    while (strpos($title, '--') !== false) {
        $title = str_replace('--', '-', $title);
    }

    return "$date-$title";
}
