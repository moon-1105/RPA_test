/**
 * http://usejsdoc.org/
 */
//필요한 모듈 선언

var express = require('express');
var http = require('http');
var app = express();

//express 서버 포트 설정(cafe24 호스팅 서버는 8001 포트 사용)
app.set('port', process.env.PORT || 8091);

//서버 생성
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});

//라우팅 모듈 선언
//NodeJS에서는 require 메소드를 통해 외부 모듈을 가져옴. 
var indexRouter = require('./routes/index');
//var toLambdaRouter = require('./routes/toLambda');

//html 템플릿 엔진 ejs 설정
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//request 요청 URL과 처리 로직을 선언한 라우팅 모듈 매핑
app.use('/', indexRouter);
//정적 리소스 처리 
app.use('/static', express.static('public'));
//app.use('/toLambda', toLambdaRouter);


