#-*-coding: utf-8 -*-

import requests
import time
import sys
import codecs
reload(sys)
sys.setdefaultencoding('utf-8')

sec_total = time.time()
re_time = time.localtime(sec_total + 60 * 60 * 4) # shift 4 hours
day = re_time.tm_wday
date = re_time.tm_mday

f = open('exporting.js','w')
def write_n(text_):
    temp_ = text_.split('\n')
    result = ""
    for line in temp_:
        result += line + "\\n"
    return result[:-2]

def partion(text, day, t):
    start = text.find(day)
    temp = text[start+1:]
    if (t == 0):
        start = temp.find("#점심")
        temp = temp[start+1:]
        end = temp.find("#")
        temp = temp[:end]
    elif (t == 1):
        start = temp.find("#저녁")
        temp = temp[start+1:]
        end = temp.find("#")
        temp = temp[:end]
    else:
        print("type error\n")
    return temp.replace("\r","")

def make_msg(var_,text_,keyboard_):
    return "var "+ var_ + " = {\"message\" : { \"text\" : \"" + text_.replace("\"","") + "\"}, " + keyboard_  + "};\n"

def load_text(url_):
    code = requests.get(url_)
    code.encoding = None
    return code.text

def load_txt(path):
    with codecs.open(path,"r",encoding='utf-8') as f:
        return f.read()
#### kyeboard init ####
f.write("var ex_const = require(\"./ex_const.js\");\n")
f.write("var kb_main = ex_const.kb_main;\n")
f.write("var kb_lunch = ex_const.kb_lunch;\n")
f.write("var kb_dinner = ex_const.kb_dinner;\n")

# for baseball information coninuous
bb_ans =  load_txt("./baseball/answer.txt")
f.write("var bb_ans = \"" + bb_ans +"\"; \n")
bb_date = load_txt("./baseball/lastlog.txt")
f.write("var bb_date = \"" + bb_date + "\";\n")
##

path = "/home/web/kakao/txts/"
day_t = ["월", "화", "수", "목", "금", "토", "일"]
day_kor = day_t[ day ]  # re date if night

text = load_txt(path + "humor.txt")
f.write( make_msg("humor_msg", write_n(text),"[\"keyboard\"] : kb_main") )
text = load_txt(path + "weekend.txt")
f.write( make_msg("weekend_msg", write_n(text),"[\"keyboard\"] : kb_main") )
## meal keyboard with date
morning_menu_txt = load_txt(path + "morning.txt")
lunch_menu_txt = load_txt(path + "lunch.txt")
dinner_menu_txt = load_txt(path + "dinner.txt")
date_text = str(date) + " (" + day_kor +") 식단. \\n"

f.write( make_msg("morning_msg", date_text + write_n(morning_menu_txt.replace("\r","")), "[\"keyboard\"] : kb_main") )
f.write( make_msg("lunch_msg", date_text + write_n(lunch_menu_txt.replace("\r","")), "[\"keyboard\"] : kb_main") )
f.write( make_msg("dinner_msg", date_text + write_n(dinner_menu_txt.replace("\r","")), "[\"keyboard\"] : kb_main") )

#######################################
rest_list = ["research","student_gama","student_inter","student_noodle","staff"]
for rest in rest_list:
#    code = requests.get(url + rest +".txt")
#    code.encoding = None
#    text = code.text
    if(day == 5 or day == 6):
        with codecs.open(path+rest+".txt","w",encoding='utf-8') as fw:
            fw.write("아직 업데이트가 안됐어요\n")
    text = load_txt(path + rest +".txt")
    eat_types = ["lunch","dinner"]
    for i in range(2):
        f.write ( make_msg( eat_types[i]+"_"+rest, write_n(partion(text,"#"+day_kor,i)),"[\"keyboard\"] : kb_"+eat_types[i]) )

# Export moudle
f.write("\nmodule.exports = {\n")
f.write("humor_msg : humor_msg,\n")
f.write("weekend_msg : weekend_msg,\n")
f.write("morning_msg : morning_msg,\n")
f.write("lunch_msg : lunch_msg,\n")
f.write("dinner_msg : dinner_msg,\n")
f.write("bb_ans : bb_ans,\n")
f.write("bb_date : bb_date,\n")
text = ""
for rest in rest_list:
    for types in eat_types:
        text += ( types+"_"+rest+ " : " + types+"_"+rest+",\n")
f.write(text[:-2])
f.write("\n};")
f.close()
