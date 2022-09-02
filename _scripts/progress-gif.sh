#!/usr/bin/env sh
set -ex

magick convert \
        -size 500x500 \
        xc:\#def \
        ~/Desktop/0.jpg

images=($(ls ~/Desktop/*.jpg))
for image in "${images[@]}"; do
    cp "${image}" "${image}_2.jpg"
    cp "${image}" "${image}_3.jpg"
done

magick \
        ~/Desktop/*.jpg \
        -resize x300 \
        -morph 5 \
        -delay 5 \
        -loop 0 \
        ~/Desktop/animation.gif

magick \
        ~/Desktop/*.jpg \
        -resize x1000 \
        -morph 10 \
        -delay 0 \
        -loop 0 \
        ~/Desktop/animation_large.gif

rm ~/Desktop/0.jpg
for image in "${images[@]}"; do
    rm "${image}_2.jpg"
    rm "${image}_3.jpg"
done

magick \
        ~/Desktop/animation_large.gif \
        ~/Desktop/animation_fast.mp4

ffmpeg -i ~/Desktop/animation_fast.mp4 -filter:v "setpts=2.0*PTS" ~/Desktop/animation.mp4 -y

/Applications/ImageOptim.app/Contents/MacOS/ImageOptim ~/Desktop/animation.gif
rm ~/Desktop/animation_fast.mp4
rm ~/Desktop/animation_large.gif