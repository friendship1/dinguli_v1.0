#-*-coding:utf-8-*-

# ## Requirements
#  - pip install selenium
#  - pip install openpyxl
#  - install chrome webdriver to destined location


from selenium import webdriver
import os
import urllib
from time import sleep
import sys
reload(sys)
sys.setdefaultencoding('utf-8')

driver_location = "/home/web/phantom/chrome/chromedriver"
download_location = "/home/web/phantom/selenium"

options = webdriver.ChromeOptions()
# options.binary_loaction = "/usr/bin/google-chrome-stable"
options.add_argument('--headless')
options.add_argument('window-size=1200,600')
options.add_argument('--no-sandbox')




# In[20]:


##chrome automation
driver = webdriver.Chrome(driver_location,chrome_options=options)
 ##install chromedriver in 
                                            ##your computer and locate its directory.
driver.implicitly_wait(3)


# In[21]:


## open ECM login site
driver.get('https://ecm.dgist.ac.kr/login.jsp')


# In[22]:

driver.implicitly_wait(1)
# Write down user information & click login button
main_window_handle = driver.current_window_handle

driver.find_element_by_id('username').send_keys('myID')
driver.find_element_by_id('passwordTest').send_keys('mypassword')
driver.find_element_by_id('btnLogin').click()


# Handle popup window (select student's identity)
# print("move to popup window")
sleep(2)
print(len(driver.window_handles))
driver.switch_to_window(driver.window_handles[1])
driver.find_element_by_id('btnSelect').click()
print("login done")

# In[23]:


# Go to 포털게시판
sleep(2)
print(len(driver.window_handles))
driver.switch_to_window(driver.window_handles[0])
driver.implicitly_wait(5)
sleep(4)
driver.find_elements_by_class_name('hand')[1].click()


# In[24]:


# Switch to window that poped out
driver.close()
driver.switch_to_window(driver.window_handles[0])


# Go to 식단표
driver.find_element_by_xpath("//ul[@id='leftMenu']/li[9]").click()
driver.find_element_by_xpath("//ul[@id='leftMenu']/li[10]/a").click()


# Go to recent post
driver.find_element_by_xpath("//tr[1]/td[2]/a").click()

source = driver.page_source
index = source.find("fnDownloadFile(")
file_num = source[index+15:index+28]
print(file_num)
command_line = "http://ecm.dgist.ac.kr/ecm/ecmCommon/file/downloadFile.do?ATFILE_CONN_NO="+file_num+"&ATFILE_SEQ_NO="

# added
file_names = ["학생","연구동","교직원"]
file_pos = [999999999,999999999,999999999]
file_pos2 = [999999999,999999999,999999999]
file_sorted = [-1,-1,-1]
source_lines = source.split("\n")
for idx,line in enumerate(source_lines):
    if ".xlsx" in line:
        for i in range(3):
            if file_names[i] in line:
                file_pos[i] = idx
                file_pos2[i] = idx
file_pos2.sort()
print(file_pos)
print(file_pos2)
for i in range(3):
    file_sorted[i] = file_pos.index(file_pos2[i])
print(file_sorted)

file_download_idx = ['0','1','2']
start_pos = 1
for i in range(3):
    pos = source[start_pos:].find('<span class="hand" onclick="fnDownloadFile')
    tmp_str = source[start_pos + pos + 58: start_pos + pos + 61]
    file_download_idx[i] = tmp_str.split(")")[0]
    start_pos = start_pos + pos + 58
print(file_download_idx)
for i in range(3):
#    os.system("wget -O menu"+str(i)+".xlsx \"" + command_line + str(i) +"\"")
    try:
        urllib.urlretrieve(command_line+file_download_idx[i], filename="menu"+str(file_sorted[i])+".xlsx")
    except:
        try:
            urllib.urlretrieve(command_line+file_download_idx[i], filename="menu"+str(file_sorted[i])+".xlsx") 
        except:
            print("urllib Error!")
'''
for i in range(3):
    os.system("unoconv menu"+str(i)+".xlsx")

for i in range(3):
    os.system("convert -resize '780' menu"+str(i)+".pdf menu"+str(i)+".png")
os.system("convert menu0.png menu1.png menu2.png -append result-menu.png")
'''
driver.quit()
