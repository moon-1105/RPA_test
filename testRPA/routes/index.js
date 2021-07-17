var express = require('express');
var router = express.Router();
const ejs = require("ejs");
const app = express();

app.set("view engine", "ejs");
//app.use(express.static(__dirname + '/'));

router.get('/index', function(req,res){
        res.render('index.ejs');
});

//모듈에 등록해야 app.js에서 app.use 함수를 통해서 사용 가능
module.exports = router;

const bodyParser = require('body-parser');  // body-parser 요청
var jsonParser = bodyParser.json();

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))

//const { doPython} = require("../public/doPython.js")
const { PythonShell } = require('python-shell');
var data;
router.post('/getData',jsonParser, function(req,res){
        console.log("START printing DATA ===========================");
        console.log(req.body); // body에 있는 정보를 콘솔창에 출력.
        data = req.body;
        console.log("END printing DATA ===========================");

        let options = {
              scriptPath: '/eng/testRPA',
              args: [JSON.stringify({data})]
        };

        PythonShell.run('test.py', options, function(err, msg){
                if (err) throw err;
                 console.log('results in NODE JS ===========');
                 final_data = JSON.parse(msg);
                 console.log(final_data);
                 res.json(final_data);
          });

});
