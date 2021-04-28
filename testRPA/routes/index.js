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
app.use(bodyParser.urlencoded({extended: true}));  // URL 인코딩 안함 
app.use(bodyParser.json());  // json 타입으로 파싱하게 설정
//app.use(express.json());
//app.use(express.urlencoded({extended : false}));

router.post('/toLambda', function(req,res){
	console.log(req.body);
	console.log(res.body);
	console.log("hi!");
	//console.log(JSON.parse(req.body));      // body에 있는 정보를 콘솔창에 출력.
    res.json({ok:true});        // 클라이언트에 성공했다고 신호를 보냄.
    
	// 외부 API 연결 => 람다 트리거 동작 => 실제 서버 접근 / 필요한거 => 데이터 결과값
	// 람다에서 결과값을 받기! 
	// 결과값 가져옴 
	// => 정리해서 웹페이지에 붙임 !! =>
    //res.render('index.ejs', result);
    res.sender("success!!!");
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

