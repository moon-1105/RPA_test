import sys
import json

#argv0은 파일 위치고, 1은 전달한 json 내용임
data  = json.loads(sys.argv[1])['data']

#전달한 json 내용 안에도 json이므로, 한번 더변환함
# undefined => string => json 이런식임..
string_data = json.dumps(data)
json_data = json.loads(string_data)

#변환한 data에 result 를 붙임
for d in json_data:
    d['result'] = 'test_result_is_RIGHT'

#전달하기 위해서 다시 string 화 해서 js로 보냄
print(json.dumps(json_data))
