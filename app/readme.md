下载UA: netdisk;5.5.2.0;PC;PC-Windows;6.1.7601;WindowsBaiduNetdisk

* pan.baidu.com -> cookie
* URL = http://pan.baidu.com/api
* info: /user/getinfo
```
user_list: [uk1,]
```
* quota: /quota
```
bdstoken:<token>
checkfree:1
checkexpire:1
web:1
app_id:250528
clienttype:0
```
* list: /list
```
bdstoken:<token>
dir: <path>
num:100
page:1
desc:1
order:[size]
    * time（修改时间）
    * name（文件名）
    * size（大小，注意目录无大小）
showempty:0
web:1
app_id:250528
clienttype:0
```
* categorylist: /categorylist
```
bdstoken:<token>
web:1
app_id:250528
clienttype:0
#form:
category:<type>
num:100
```
* create: /create
```
bdstoken:<token>
a:commit
web:1
app_id:250528
clienttype:0
#form:
path:<path>
isdir:1
block_list:[]
```

* filemanager: /filemanager
```
bdstoken:<token>
opera:[delete,rename,move,copy,]
async:2
web:1
app_id:250528
clienttype:0
#form:
filelist:[path1,] // delete
filelist:[{"path":path1,"newname":name1}] // rename
filelist:[{"path":path1,"dest":dest1,"newname":name1}] // move,copy
```

* download: http://pcs.baidu.com/rest/2.0/pcs/file
```
method:locatedownload
path:<path>
app_id:250528
ver:4.0
```

* pcs server:https://pcs.baidu.com/rest/2.0/pcs/manage?method=listhost
"""通过测试返回最快的pcs服务器
"""
* http://pcs.baidu.com/rest/2.0/pcs/file?app_id=250528&method=locateupload
"""通过百度返回设置最快的pcs服务器
"""