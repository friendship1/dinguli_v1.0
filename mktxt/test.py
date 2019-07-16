#-*-coding:utf-8-*-
import xlrd
import codecs

wb = xlrd.open_workbook("menu2.xlsx")
sh = wb.sheet_by_index(0)
# f = codecs.open("student.txt",'w',"utf-8")

# d0 = datetime(1900,1,1) + timedelta(days = 1)

print(xlrd.xldate.xldate_as_datetime(int(sh.cell(1,2).value),wb.datemode).day )

print(int(sh.cell(1,2).value))

print("####")

print(sh.cell(3,2).value)
