var express = require('express');
var router = express();
var bodyParser = require('body-parser');
var PythonShell = require('python-shell');
var fs = require('fs');
var exported = require('./exporting.js');
var ex_const = require('./ex_const.js');
var ex_bb = require('./baseball/corrector.js');
var echo = require("./echo.js");
var ex_bb2 = require('./baseball/bb_manage.js');
var connection = echo.connection;

connection.connect();


var py_options = {
	mode: 'json',
	pythonPath: '',
	pythonOptions: ['-u'],
	scriptPath: '',
	args: ['value1']
};

router.get('/', function(req, res) {
	res.send("Hello");
});

router.use(bodyParser.json());
///////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
keyboard = ex_const.kb_main;
router.get('/keyboard', (req, res) => {
	res.set({
		'content-type': 'application/json; charset=utf-8'
	}).send(JSON.stringify(keyboard));
});
///////////////////////////////////////////////////////////////////////

router.post('/message', (req, res) => {
    const _obj = {
        user_key: req.body.user_key,
        type: req.body.type,
        content: req.body.content
    };
    var date_kor = new Date() +9;
    var date_ori = new Date();
    console.log(date_kor + _obj.user_key +" "+ _obj.content);
    var keyboard = ex_const.kb_main;

    var sec = date_ori.getTime() / 1000;
    echo.get_id(_obj.user_key,sec);

    var exception = 0;
    if(_obj.content == "점심메뉴")
    {
	var massage = exported.lunch_msg;
    }
	else if(_obj.content == "저녁메뉴")
    {
		var massage = exported.dinner_msg;
    }
    else if(_obj.content == "아침메뉴")
        var massage = exported.morning_msg;
    else if(_obj.content == ex_const.lunch_research) {
		var massage = exported.lunch_research;
    }
    else if(_obj.content == ex_const.lunch_student_gama)
		var massage = exported.lunch_student_gama;
    else if(_obj.content == ex_const.lunch_student_inter)
		var massage = exported.lunch_student_inter;
    else if(_obj.content == ex_const.lunch_student_noodle)
		var massage = exported.lunch_student_noodle;
    else if(_obj.content == ex_const.lunch_staff)
		var massage = exported.lunch_staff;
////////////////////////////////////////////////////////////////////
    else if(_obj.content == ex_const.dinner_research)
		var massage = exported.dinner_research;
    else if(_obj.content == ex_const.dinner_student_gama)
		var massage = exported.dinner_student_gama;
    else if(_obj.content == ex_const.dinner_student_inter)
		var massage = exported.dinner_student_inter;
    else if(_obj.content == ex_const.dinner_staff)
		var massage = exported.dinner_staff;

    else if(_obj.content == "처음으로")
    {
		var massage = {"message":{"text":"처음으로 돌아갑니다."},keyboard};
    }
    else if(_obj.content == "딩굴이의 혼잣말")
    {
		var massage = exported.humor_msg;
    }
    else if(_obj.content == "주말입니당")
    {
		var massage = exported.weekend_msg;
    }
    else if(_obj.content == "오늘의 나연")
		var massage = ex_const.ny_url;
    else if(_obj.content == "식단 그대로")
		var massage = ex_const.menu_url;
	else if(_obj.content == "유용한 사이트")
		var massage = ex_const.good_url;

    else if(_obj.content == "숫자를 맞춰라!")
		var massage = {"message":{"text":  ex_const.bb_send_msg_onlytxt + exported.bb_date}};
    else if(_obj.content == "딩굴이와 메아리놀이"){
		var keyboard = ex_const.kb_echo;
		var massage =  {"message":{"text": "메아리놀이 할래??"}, keyboard};
    }
    else if(_obj.content == "메아리를 들려줘"){
	exception = 1;
	echo.echo_out(function(ret) {
		var keyboard = ex_const.kb_echo;
		var massage = {"message":{["text"]:ret},keyboard};
		res.set({'content-type':'application/json'}).send(JSON.stringify(massage));
	});
    }
    else if(_obj.content == "외칠래!"){
		var massage = ex_const.echo_send_msg;	
    }
    else if(_obj.content[0] == "!"){
		var keyboard = ex_const.kb_echo;
	if (_obj.content.length > 749)
	    var massage = {"message": {"text":"메아리가 너무 길어서 안들려요...(650자)"}, keyboard};
	else {
	    var massage = ex_const.echo_sended_msg;
	    echo.echo_in(_obj.user_key,_obj.content.substr(1),sec);
	}
    }
    else if (_obj.content[0] == "?"){
		var bb_num = _obj.content.substr(1);
	exception = 1;
		var ans_len = 5;
	echo.bb_check(_obj.user_key,function(ret) {
	    if(ret >= 5){
	        var massage = {"message":{["text"]:"이런! 이미 정해진 만큼 시도했네요"},keyboard};
	    }
	    else if (ret == -1)
			var massage = {"message":{["text"]:"이런! 중간에 들어오시면 다음 시작까지 기다려야 해요"},keyboard};
 
	    else if(bb_num.length != ans_len)
	    {
			var massage = {"message": {["text"]:"다섯글자가 아닌데?"}, keyboard};
	 		//	console.log(bb_num);
	    }
	    else
	    {
			echo.bb_trial_add(_obj.user_key);
			var check = ex_bb.corrector(bb_num,exported.bb_ans);
			var check_msg = "결과는 " + check[0].toString() + "볼, " + check[1].toString() + "스트라이크 입니다~";
			var massage = {"message": {["text"]: check_msg},keyboard};
		if(check[1] == ans_len) // if correct
		{
		    var massage = {"message" : {["text"]: "정답입니다! 1:1 상담하기를 눌러 이야기 해 주시면 상품을 드려요~"}, keyboard};
		    //
		    exported.bb_ans = ex_bb2.reset_bb();
		    exported.bb_date = ex_bb2.setlog_bb();
		}
	    }
	    res.set({'content-type':'application/json'}).send(JSON.stringify(massage));
	});
    }

    else {
        var massage = {"message":{"text":"무슨 소린지 모르겠어;;"},keyboard};
    }

///////////////////////////////////////////////////////// send here 
    if(exception != 1){
        res.set({
            'content-type': 'application/json'
        }).send(JSON.stringify(massage));
    }
});

router.listen(8080,function() {
	console.log("server started");
}); 
