#!/usr/bin/env sh
set -ex
convert -resize x500 \
        -delay 20 \
        -morph 10 \
        -loop 0 \
        ~/Desktop/*.jpg ~/Desktop/animation.gif