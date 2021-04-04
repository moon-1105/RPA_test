/**
 * http://usejsdoc.org/
 */
/**
 * 엑셀파일을 읽어서 화면에 띄운다. 
 */
var result = "";
var JsonRes = null;

function excelHandl(event){
	// event를 실행하고 완료되면, makeJson을 함.
    excelHandlJson(event, makeJson);	
}
function excelHandlJson(event, callback){
	//실질적으로 엑셀을 읽어오는 부분 
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function(){
        var fileData = reader.result;
        var wb = XLSX.read(fileData, {type : 'binary'});
        var sheetNameList = wb.SheetNames; // 시트 이름 목록 가져오기 
        var firstSheetName = sheetNameList[0]; // 첫번째 시트명
        var firstSheet = wb.Sheets[firstSheetName]; // 첫번째 시트 
        callback(firstSheet);   
    };
    reader.readAsBinaryString(input.files[0]);
}
function makeJson(sheet){
	//앞서 엑셀을 읽은 후 json 변환 하여
	JsonRes = XLSX.utils.sheet_to_json(sheet);
	//console.log( JSON.stringify(XLSX.utils.sheet_to_json (sheet)) );
	console.log(JsonRes);
	console.log(Object.keys(JsonRes).length);
	var cnt = Object.keys(JsonRes).length ;
	console.log(JsonRes[0]);
	//한 row씩 html에 추가 
	for(var i = 0; i< cnt ; i++){
		addRow(JsonRes[i].Hostname, JsonRes[i].IP,JsonRes[i].Port,
		JsonRes[i].command,JsonRes[i].TACAC_ID,JsonRes[i].TACAC_PW);
	}
}

//HTML에 로우 추가하는 함수
function addRow(v_host, v_ip, v_port, v_command, v_t_id, v_t_pw){
	const table = document.getElementById('equipments');
	
	const newRow = table.insertRow();
	
	const hostname = newRow.insertCell(0);
	const ip = newRow.insertCell(1);
	const port = newRow.insertCell(2);
	const command = newRow.insertCell(3);
	const t_id = newRow.insertCell(4);
	const t_pw = newRow.insertCell(5);
	
	hostname.innerText = JSON.stringify(v_host);
	ip.innerText= v_ip;
	port.innerText= v_port;
	command.innerText= v_command;
	t_id.innerText= v_t_id;
	t_pw.innerText= v_t_pw;
}