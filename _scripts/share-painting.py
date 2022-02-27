#!/usr/bin/python3

import os
import webbrowser
import subprocess 
import urllib.parse

def remove_suffix(input_string, suffix):
    if suffix and input_string.endswith(suffix):
        return input_string[:-len(suffix)]
    return input_string

def remove_prefix(input_string, prefix):
    if prefix and input_string.startswith(prefix):
        return input_string[len(prefix):]
    return input_string


paintingMdPath = os.path.dirname(os.path.realpath(__file__)) + '/../_paintings'
paintingMds = sorted(os.listdir(paintingMdPath))
lastFileName = paintingMdPath + '/' + paintingMds[-1];

print('Using %s' % lastFileName)

url = 'https://moehrenzahn.de/paintings/%s' % remove_suffix(lastFileName, ".md")

with open(lastFileName, 'r') as file:
    text = file.read()

lines = text.splitlines()

for line in lines:
    if line.startswith('title:'):
        paintingTitle = remove_prefix(line, 'title: ').strip()
    if line.startswith('file:'):
        paintingImgUrl = 'https://moehrenzahn.de/' + remove_prefix(line, 'file:').strip()
    if line.startswith('size:'):
        paintingSize = remove_prefix(line, 'size:').strip()
    if line.startswith('materials:'):
        paintingMaterials = remove_prefix(line, 'materials:').strip()

markdown = text.split("---")[-1].strip();

text = "Neues Gemälde: %s. %s, %s\n\n%s" % (paintingTitle, paintingMaterials, paintingSize, markdown)
shareUrls = [
    'https://instagram.com',
    'https://facebook.com/sharer.php?u=%s' % urllib.parse.quote(url),
    'https://twitter.com/intent/tweet?url=%s&text=%s&via=moehrenzahn' % (urllib.parse.quote(url), urllib.parse.quote(text)),
]

print(text)

subprocess.run("pbcopy", universal_newlines=True, input=text)

for url in shareUrls:
    webbrowser.open(url)