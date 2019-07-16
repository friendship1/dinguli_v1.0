#1/bin/bash
cd /home/web/kakao/topdf/
ssconvert --export-type=Gnumeric_html:html40frag ../mktxt/menu0.xlsx menu0.html
ssconvert --export-type=Gnumeric_html:html40frag ../mktxt/menu1.xlsx menu1.html
ssconvert --export-type=Gnumeric_html:html40frag ../mktxt/menu2.xlsx menu2.html
python merge.py
webkit2png menu.html -x 1280 1200 --output=menu.png
mv ./*.html ../../www/html/
mv ./menu.png ../../www/html/
date
