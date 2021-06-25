/**
 * 정보를 lambda에서 처리함. 
 */
const express = require("express");
const router = express.Router();

const ejs = require("ejs");
const bodyParser = require('body-parser');          // body-parser 요청
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: false}));  // URL 인코딩 안함 
app.use(bodyParser.json());  // json 타입으로 파싱하게 설정
app.use(express.static(__dirname + '/'));

app.post("/toLambda", function(req, res){   // postTest라는 주소로 POST요청이 들어오면 실행
   
    console.log(req.body);      // body에 있는 정보를 콘솔창에 출력.
    res.json({ok:true});        // 클라이언트에 성공했다고 신호를 보냄.
    
	// 외부 API 연결 => 람다 트리거 동작 => 실제 서버 접근 / 필요한거 => 데이터 결과값
	// 람다에서 결과값을 받기! 
	// 결과값 가져옴 
	// => 정리해서 웹페이지에 붙임 !! => 
});

app.listen(3000, function(){
    console.log("doing..."); 
});

module.exports = router;
