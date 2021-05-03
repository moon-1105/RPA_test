/**
 * index.js 라우팅 파일 
 */

var express = require('express');
var router = express.Router();
const ejs = require("ejs");
const app = express();
 
app.set("view engine", "ejs");
//app.use(express.static(__dirname + '/'));

router.get('/index', function(req,res){
	res.render('index.ejs');
});

const bodyParser = require('body-parser');  // body-parser 요청
var jsonParser = bodyParser.json();

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))

router.post('/toLambda',jsonParser, function(req,res){
	console.log("START printing DATA ===========================");
	console.log(req.body); // body에 있는 정보를 콘솔창에 출력.
	var data = req.body;
	console.log("END printing DATA ===========================");      
    
	if(req.body == '{}' || req.body =='undefined'){
		res.send('데이터 전송에 실패했습니다');
	}else{
		res.send('데이터 전송에 성공했습니다');
	}
    
	// 외부 API 연결 => 람다 트리거 동작 => 실제 서버 접근 / 필요한거 => 데이터 결과값
	// 람다에서 결과값을 받기! 
	// 결과값 가져옴 
	// => 정리해서 웹페이지에 붙임 !! =>
});

//모듈에 등록해야 app.js에서 app.use 함수를 통해서 사용 가능
module.exports = router;

/*
  json 파일을 읽어서 view로 data를 전달하는 부분
  app.get('/listUser', function (req, res) {
   fs.readFile( __dirname + "/data.json", 'utf8', function (err, data) { // json 파일 위치 지정
       var rData = JSON.parse(data);
       // console.log(rData);
       res.render(__dirname+'/views/jsonRead.ejs', {rData});
   });
    
});
 */

