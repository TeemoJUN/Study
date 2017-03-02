"use strict";
var page=require('webpage').create();
var url="http://ife.baidu.com/course/all";
var fs = require("fs");
var rs;
phantom.outputEncoding="gbk";
 page.includeJs(
 	'http://code.jquery.com/jquery-1.4.1.min.js',
 	function(){
 		page.onCallback=function(){
				rs=page.evaluate(function(){
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
					return JSON.stringify(result,null,4);
				});
					//console.log(str);
				var file=fs.open('result.json','w');
				file.write(rs);
				file.close();
				phantom.exit();
 		}


		page.open(url,function(status){
			if(status!=='success'){
				console.log("FAIL");
				phantom.exit();
			}
			else{
				page.evaluateAsync(function(){
					setInterval(function(){
						var a=document.getElementsByClassName("load-more-btn").item(0);
						a.click(); 
					},250);
					setTimeout(function(){
							window.callPhantom();
						},3000);
				},50000);

			}
		});
	}
 );
