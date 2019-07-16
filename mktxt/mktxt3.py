#-*-coding:utf-8-*-
import codecs
import sys
import time
reload(sys)
sys.setdefaultencoding('UTF8')

file_names = ["research.txt","student_38a.txt","student_50.txt","student_38b.txt","staff.txt"]
file_names_kor = ["연구동식당","학식A","학식일품","학식B","교직원식당"]
day_list = ["월", "화", "수", "목", "금", "토", "일"]
meal_types = ["#아침","#점심","#저녁"]
meal_types_eng = ["morning","lunch","dinner"]

txt_path = ""

re_time = time.localtime(time.time() + 60 * 60 * 4) # shift 4 hours just same as parse.py
day_int = re_time.tm_wday
day_str = day_list[day_int]

 


for i,t in enumerate(meal_types):
    f_main = codecs.open(meal_types_eng[i] + ".txt", 'w', "utf-8")
    for j,file_name in enumerate(file_names):
        if(t=="#저녁" and file_name=="student_38b.txt"):
            continue
        if(t=="#아침" and file_name !="student_38a.txt"):
            continue
        if(t=="#저녁" and file_name=="student_50.txt"):
            continue
            

        f_main.write("\n<=== " + file_names_kor[j] + " 식단 ===>\n")
        
        f = codecs.open(txt_path + file_name, 'r', "utf-8")
        text = f.read()
        start = text.find("#" + day_str)
        text = text[start+1:]
        start = text.find(t)
        text = text[start+3:]
        end = text.find("#")
        text = text[:end]
        buf = text.strip() + "\n"
        f_main.write(buf)
        buf = ""
        f.close()
    f_main.close()
   
