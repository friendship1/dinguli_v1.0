#!/bin/bash
cd /home/web/www/html/g5/ny
RANGE=81
num=$RANDOM
let "num %= $RANGE"
cp $num.jpg ny.jpg
date
cd /home/web/kakao/mktxt
echo working start
python mktxt.py
sleep 3
# python mktxt2re.py
# python mktxt3.py
echo work end
# mv ./*.txt ../txts
sh kill_chrome.sh
