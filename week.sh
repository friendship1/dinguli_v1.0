#!/bin/bash
cd /home/web/kakao/baseball
echo weekday start
day=`date +%w`
if [ $day == "1" ];then
   echo excute day
   date
   nodejs dbset_w.js
#   python create_w.py
fi
