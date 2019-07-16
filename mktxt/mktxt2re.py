#-*-coding:utf-8-*-
import xlrd
import codecs
import sys
reload(sys)
sys.setdefaultencoding('UTF8')

download_location = "."
file_names = ["menu0.xlsx","menu1.xlsx","menu2.xlsx"]

def txt_w(f, sh, i, j):
    if(type(sh.cell(j, i).value) == unicode):
        f.write(sh.cell(j, i).value + '\n')
    else:
        f.write('\n')

def student(file_name):
    wb = xlrd.open_workbook(download_location + '/' + file_name)
    sh = wb.sheet_by_index(0)

    f = codecs.open("student_38a.txt", 'w',"utf-8")
    dow = ['월', '화', '수', '목', '금','토', '일']
    for i in range(2, 7):
        f.write("#%s\n#아침\n" % dow[i - 2])
        #txt_w(f, sh, i, 3)
        f.write("#점심\n")
        txt_w(f, sh, i, 3)
        f.write("#저녁\n")
        txt_w(f, sh, i, 14)
    f.close()
    f = codecs.open("student_50.txt", 'w',"utf-8")
    for i in range(2, 7):
        f.write("#%s\n#점심\n" % dow[i - 2])
        txt_w(f, sh, i, 10)
        f.write("#저녁\n")
    f.close()
    f = codecs.open("student_38b.txt", 'w',"utf-8")
    for i in range(2, 7):
        f.write("#%s\n#점심\n" % dow[i - 2])
        txt_w(f, sh, i, 9)
    f.close()




def staff(file_name):
    wb = xlrd.open_workbook(download_location + '/' + file_name)
    sh = wb.sheet_by_index(0)

    f = codecs.open("staff.txt", 'w',"utf-8")
    dow = ['월', '화', '수', '목', '금']
    for i in range(2, 7):
        f.write("#%s\n#점심\n" % dow[i - 2])
        txt_w(f, sh, i, 3)
        f.write("#저녁\n")
        txt_w(f, sh, i, 9)
    f.close()



def research(file_name):
    wb = xlrd.open_workbook(download_location + '/' + file_name)
    sh = wb.sheet_by_index(0)

    f = codecs.open("research.txt", 'w',"utf-8")
    dow = ['월', '화', '수', '목', '금']
    for i in range(2, 7):
        f.write("#%s\n#점심\n" % dow[i - 2])
        f.write("=공통=\n")
        txt_w(f, sh, i, 14)
        f.write("=A 4000원=\n")
        for j in range(2, 8):
            txt_w(f, sh, i, j)
        f.write("=B 4500원=\n")
        for j in range(8, 14):
            txt_w(f, sh, i, j)
        f.write("#저녁\n")
        f.write("(%s)\n" % sh.cell(21, i).value)
        for j in range(15, 21):
            txt_w(f, sh, i, j)
    f.close()



for i in range(0, 3):
    if(i == 0):
        student(file_names[i])
    elif(i == 2):
        staff(file_names[i])
    elif(i == 1):
        research(file_names[i])

