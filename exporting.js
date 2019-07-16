var ex_const = require("./ex_const.js");
var kb_main = ex_const.kb_main;
var kb_lunch = ex_const.kb_lunch;
var kb_dinner = ex_const.kb_dinner;
var bb_ans = "28136"; 
var bb_date = "Thu Jul 11 2019 00:06:42 GMT+0900 (KST)9";
var humor_msg = {"message" : { "text" : "친구 777 기념으로 대대적 업데이트가 진행중입니다~~\n(적어도 개강 전까지는...)\n"}, ["keyboard"] : kb_main};
var weekend_msg = {"message" : { "text" : "주말에는 쉬어요~\n"}, ["keyboard"] : kb_main};
var morning_msg = {"message" : { "text" : "15 (월) 식단. \n<=== 학식A 식단 ===>\n\n"}, ["keyboard"] : kb_main};
var lunch_msg = {"message" : { "text" : "15 (월) 식단. \n<=== 연구동식당 식단 ===>\n업데이트가 안됐어요\n<=== 학식A 식단 ===>\n쌀밥\n<=== 학식일품 식단 ===>\n추가밥\n<=== 학식B 식단 ===>\n냉김치말이국수\n<=== 교직원식당 식단 ===>\n업데이트가 안됐어요\n"}, ["keyboard"] : kb_main};
var dinner_msg = {"message" : { "text" : "15 (월) 식단. \n<=== 연구동식당 식단 ===>\n업데이트가 안됐어요\n<=== 학식A 식단 ===>\n\n<=== 학식일품 식단 ===>\n\n<=== 교직원식당 식단 ===>\n업데이트가 안됐어요\n"}, ["keyboard"] : kb_main};
var lunch_research = {"message" : { "text" : "아직 업데이트가 안됐어요"}, ["keyboard"] : kb_lunch};
var dinner_research = {"message" : { "text" : "아직 업데이트가 안됐어요"}, ["keyboard"] : kb_dinner};
var lunch_student_gama = {"message" : { "text" : "아직 업데이트가 안됐어요"}, ["keyboard"] : kb_lunch};
var dinner_student_gama = {"message" : { "text" : "아직 업데이트가 안됐어요"}, ["keyboard"] : kb_dinner};
var lunch_student_inter = {"message" : { "text" : "아직 업데이트가 안됐어요"}, ["keyboard"] : kb_lunch};
var dinner_student_inter = {"message" : { "text" : "아직 업데이트가 안됐어요"}, ["keyboard"] : kb_dinner};
var lunch_student_noodle = {"message" : { "text" : "아직 업데이트가 안됐어요"}, ["keyboard"] : kb_lunch};
var dinner_student_noodle = {"message" : { "text" : "아직 업데이트가 안됐어요"}, ["keyboard"] : kb_dinner};
var lunch_staff = {"message" : { "text" : "아직 업데이트가 안됐어요"}, ["keyboard"] : kb_lunch};
var dinner_staff = {"message" : { "text" : "아직 업데이트가 안됐어요"}, ["keyboard"] : kb_dinner};

module.exports = {
humor_msg : humor_msg,
weekend_msg : weekend_msg,
morning_msg : morning_msg,
lunch_msg : lunch_msg,
dinner_msg : dinner_msg,
bb_ans : bb_ans,
bb_date : bb_date,
lunch_research : lunch_research,
dinner_research : dinner_research,
lunch_student_gama : lunch_student_gama,
dinner_student_gama : dinner_student_gama,
lunch_student_inter : lunch_student_inter,
dinner_student_inter : dinner_student_inter,
lunch_student_noodle : lunch_student_noodle,
dinner_student_noodle : dinner_student_noodle,
lunch_staff : lunch_staff,
dinner_staff : dinner_staff
};