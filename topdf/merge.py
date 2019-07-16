#-*-coding:utf-8-*-
import re

out = open("menu.html",'w')

menu0 = open("menu0.html", 'r')
while True:
    line = menu0.readline()
    if not line: break
    if line.find("English") != -1: break 
    out.write(line)
menu0.close()

menu1 = open("menu1.html", 'r')
regex = re.compile(r"font-size:[0-9]+")
while True:
    line = menu1.readline()
    if not line: break
    if line.find("Weekly ") != -1: break;
    if line.find("<caption>&#50689;&#47928;</caption>") != -1: break;
    line = line.replace("<b>","")
    line = line.replace("</b>","")
    out.write(regex.sub("font-size:11", line))
menu1.close()

menu2 = open("menu2.html", 'r')
while True:
    line = menu2.readline()
    if not line: break
    if line.find("English") != -1: break 
    out.write(line)
menu2.close()
