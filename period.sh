#!/bin/bash
cd /home/web/kakao
echo working start
python parse_v2.py
python mktxt3.py
ps=`pgrep -f node`
len=`echo $ps | wc -c`
if [ $len != "1" ];then
   echo kill $ps
   kill $ps
fi
nodejs dbupdate.js
nohup node menu.js &
echo `date`
echo work on
