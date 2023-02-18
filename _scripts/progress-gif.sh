#!/usr/bin/env sh
set -e

if [ -z "$1" ]
  then
    echo "progress-gif"
    echo "  Pass a directory with .jpg files which will be resized and combined into a"
    echo "  progress animation in .gif and .mp4 format."
    echo ""
    echo "Usage: progress-gif.sh path/to/directory"
    echo ""
    exit 0
fi

imagePath="$1"

images=($(ls $imagePath/*.jpg))
width=$(identify -format '%w' "${images[0]}")
height=$(identify -format '%h' "${images[0]}")
if [ -z "width" ]
  then
    echo "Could not read size information. No images in directory?"
    exit 1
fi
magick convert \
        -size ${width}x${height} \
        xc:\#fed \
        "$imagePath/0.jpg"


for image in "${images[@]}"; do
    cp "${image}" "${image}_2.jpg"
    cp "${image}" "${image}_3.jpg"
done

echo "Generating compact .gif ..."
magick \
        "$imagePath/*.jpg" \
        -resize x300 \
        -morph 5 \
        -delay 5 \
        -loop 0 \
        "$imagePath/animation.gif"
echo "Optimizing compact .gif ..."
/Applications/ImageOptim.app/Contents/MacOS/ImageOptim "$imagePath/animation.gif" > /dev/null 2>&1

echo "Generating large .gif. This may take some time ..."
magick \
        "$imagePath/*.jpg" \
        -resize x1000 \
        -morph 10 \
        -delay 0 \
        -loop 0 \
        "$imagePath/animation_large.gif"

echo "Cleaning up temporary files ..."
rm "$imagePath/0.jpg"
for image in "${images[@]}"; do
    rm "${image}_2.jpg"
    rm "${image}_3.jpg"
done

echo "Generating .mp4. This may take some time ..."
magick \
        "$imagePath/animation_large.gif" \
        "$imagePath/animation_fast.mp4"

ffmpeg -i "$imagePath/animation_fast.mp4" -filter:v "setpts=2.0*PTS" "$imagePath/animation.mp4" -y

echo "Cleaning up temporary files ..."
rm "$imagePath/animation_fast.mp4"
rm "$imagePath/animation_large.gif"
echo "Done"