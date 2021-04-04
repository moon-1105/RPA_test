/**
 * index.js 라우팅 파일 
 */

var express = require('express');
var router = express.Router();

//라우터의 get()함수를 이용해 request URL('/')에 대한 업무처리 로직 정의
// 라우터 맵핑시 클라이언트 요청 url + 프로토콜 메소드 (get, post, put, delete) 등이 가능.
router.get('/', function(req, res, next) {
	//res는 클라이언트로 응답을 하는 객체. send, json, render, sendfile 등이 있음. 
    res.send('index page');
});


var test = require('./main')
router.get('/main', function(req,res){
	test.list(req, res);
});

//모듈에 등록해야 web.js에서 app.use 함수를 통해서 사용 가능
module.exports = router;

