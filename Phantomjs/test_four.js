"use strict";
var page=require('webpage').create();
var url="http://ife.baidu.com/course/all";
var fs = require("fs");
var rs;
phantom.outputEncoding="gbk";
 page.includeJs(
 	'http://code.jquery.com/jquery-1.4.1.min.js',
 	function(){
		page.open(url,function(status){
			if(status!=='success'){
				console.log("FAIL");
				phantom.exit();
			}
			else{
				setTimeout(function(){
					rs=page.evaluate(function(){

						// 	var now=new Date().getTime();
						//var a=document.getElementsByClassName("load-more-btn").item(0);
								 //a.click();
						 	// while(now<(new Date().getTime()+200)){ };

						var result={};
						result.code=1;
						result.meg="抓取成功";
						result.time=2000;
						result.title=document.getElementsByTagName("title").item(0).innerHTML;
						result.dataList=[];
						var title_all=document.getElementsByClassName("cal-list-right");
						for(var i=0;i<title_all.length;i++){
							var re=new Object();
							re.title=title_all[i].getElementsByClassName("cal-list-title").item(0).innerHTML;
							re.content=title_all[i].getElementsByClassName("cal-list-abstract").item(0).innerHTML;
							result.dataList.push(re);
						}

						//对象序列化，就是将对象的值全部输出
						//不然向return result十就返回的是对想的引用，console.log()//[Object Object];
						return JSON.stringify(result,null,4);
					});
					//console.log(str);
					var file=fs.open('result.json','w');
					file.write(rs);
					file.close();
					phantom.exit();
				},2000);
			}
		});
	}
 );
/*
 					//var str=JSON.stringify(rs,null,4);
					//w：写
					// a:追加
					// r:读
*/