#!/usr/bin/env python3

import os
import webbrowser
import subprocess 
import urllib.parse

paintingImgPath = os.path.realpath(os.path.dirname(os.path.realpath(__file__)) + '/../paintings')
paintingImages = os.listdir(paintingImgPath)

os.system("mkdir " + paintingImgPath + "/thumbnail")
for image in paintingImages:
    if not image.endswith(".jpg") and not image.endswith(".jpeg"):
        continue;
    script = "cd " + paintingImgPath + " && convert '" + image + "' -resize 40% 'thumbnail/" + image + "'" 
    os.system(script)
os.system("/Applications/ImageOptim.app/Contents/MacOS/ImageOptim " + paintingImgPath + " " + paintingImgPath + "/thumbnail")