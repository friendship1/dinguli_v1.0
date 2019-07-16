#!/bin/bash
ps=`pgrep -f chrome`
len=`echo $ps | wc -c`
if [ $len != "1" ];then
   echo kill $ps
   kill $ps
fi
echo `date`
echo work on
