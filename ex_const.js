var lunch_research = "연구동 점심";
var lunch_student = "학생식당 점심";
var lunch_staff = "교직원식당 점심";
var dinner_research = "연구동 저녁";
var dinner_student = "학생식당 저녁";
var dinner_staff = "교직원식당 저녁";
var lunch_student_gama = "가마 점심";
var lunch_student_inter = "인터쉐프 점심";
var lunch_student_noodle = "라면 점심";
var dinner_student_gama  = "가마 저녁";
var dinner_student_inter = "인터쉐프 저녁";
var date = new Date();
date.setHours(date.getHours() + 4);
var date = date.getDay();

var kb_main = { type: 'buttons',
	buttons: ["식단 그대로","딩굴이의 혼잣말","딩굴이와 메아리놀이","숫자를 맞춰라!","유용한 사이트","오늘의 나연"]
};
var kb_weekend = { type: 'buttons',
	buttons: ["주말입니당","딩굴이와 메아리놀이","딩굴이의 혼잣말","숫자를 맞춰라! 정답"]
};

// if(date == 0 || date == 6)
//     var kb_main = kb_weekend;
var kb_lunch = {
	type: 'buttons',
	buttons:[lunch_student_gama, lunch_student_inter,lunch_student_noodle,lunch_research,lunch_staff,"처음으로"]
};
var kb_dinner = {
      type:"buttons",
      buttons:[dinner_student_gama,dinner_student_inter, dinner_research,dinner_staff,"처음으로"]
};

var kb_echo = {
    type : "buttons",
    buttons:["메아리를 들려줘","외칠래!","처음으로"]
};

var echo_send_msg = {
    "message":{"text":"앞에 \"!\"를 붙이고 말해봐~\n (\"처음으로\"는 처음으로가기~"}
};
var echo_sended_msg = {
    "message":{"text":"메아리가 울려퍼지기 시작합니다..." }, ["keyboard"] : kb_echo
};
var bb_send_msg_onlytxt = "앞에 \"?\"를 붙이고 답을 입력해줘!(\"처음으로\"를 입력하면 이전 버튼메뉴로 돌아가짐)\n정답은 중복없는 다섯자리 숫자이고 누군가 맞추번 매번 바뀌어!\n기회는 총 5번!매주 월요일 9시에 초기화 돼!\n가장 마지막으로 정답이 바뀐 시점은 :\n";
var bb_send_msg = {
    "message":{"text":"앞에 \"?\"를 붙이고 답을 불러줘~\n 정답은 다섯자리 숫자야!\n\"처음으로\"는 처음으로 가기~(기회는 5번)"}}
var ny_url = { "message" : { "text" : "오늘의 나연 http://www.dgrang.com/g5/ny/ny.jpg",
	"photo" : {"url" : "http://www.dgrang.com/g5/ny/ny.jpg", "width":1280,"height":1280}
}, ["keyboard"] : kb_main};

var menu_url = { "message" : { "text" : "식단표 한번에 보기\nhttp://www.dgrang.com/menu.html"}, ["keyboard"] : kb_main};
// var menu_url = { "message" : { "text" : "학생식당\nhttp://www.dgrang.com/menu0.html\n연구동식당\nhttp://www.dgrang.com/menu1.html \n교직원식당\nhttp://www.dgrang.com/menu2.html"}, ["keyboard"] : kb_main};
var good_url = {"message":{"text": "- 셔틀버스\n http://www.dgist.ac.kr/kr/html/sub04/0406.html?sch_tab=tab3\n- 직원검색\n http://www.dgist.ac.kr/kr/html/sub01/010402.html\n- 시내버스\n http://m.businfo.go.kr/bp/m/realTime.do?act=posInfoMain&roNo=%B1%DE%C7%E08" }, ["keyboard"] : kb_main};


module.exports = {
 lunch_research : lunch_research,
 lunch_student : lunch_student,
 lunch_staff : lunch_staff,
 dinner_research : dinner_research,
 dinner_student : dinner_student,
 dinner_staff : dinner_staff,
 lunch_student_gama : lunch_student_gama,
 lunch_student_inter : lunch_student_inter,
 lunch_student_noodle : lunch_student_noodle,
 dinner_student_gama : dinner_student_gama,
 dinner_student_inter : dinner_student_inter,
 kb_main : kb_main,
 kb_weekend : kb_weekend,
 kb_lunch : kb_lunch,
 kb_dinner : kb_dinner,
 kb_echo : kb_echo,
 echo_send_msg : echo_send_msg,
 echo_sended_msg : echo_sended_msg,
 bb_send_msg_onlytxt : bb_send_msg_onlytxt,
 ny_url : ny_url,
 menu_url : menu_url,
 good_url : good_url
};
