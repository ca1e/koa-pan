下载UA: netdisk;5.5.2.0;PC;PC-Windows;6.1.7601;WindowsBaiduNetdisk

* pan.baidu.com -> cookie
* URL = http://pan.baidu.com/api

* 公共get参数: 
```
channel:chunlei
web:1
app_id:250528
clienttype:0
```

* info: /user/getinfo
```
user_list: [uk1,]
```
* quota: /quota
```
bdstoken:<token>
checkfree:1
checkexpire:1
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
```
* categorylist: /categorylist
```
bdstoken:<token>
#form:
category:<type>
num:100
```
* create: /create
```
bdstoken:<token>
a:commit
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

* offline: https://pan.baidu.com/rest/2.0/services/cloud_dl

```
bdstoken:<token>
task_ids:(query_task)
task_id:(cancel_task,delete_task)
#form
method:[add_task,*query_task*,*list_task*,*cancel_task*,*delete_task*,]
app_id:250528
source_url:<src>
save_path:<dist path>
type:[(normal),3(ed2k),4(magnet)]
```

* pcs server:https://pcs.baidu.com/rest/2.0/pcs/manage?method=listhost
"""通过测速返回最快的pcs服务器
"""
* http://pcs.baidu.com/rest/2.0/pcs/file?app_id=250528&method=locateupload
"""通过百度返回设置最快的pcs服务器
"""