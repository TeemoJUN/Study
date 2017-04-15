function addEvent(element,event,listener){
	if(element.addEventListener){
		element.addEventListener(event,listener,false);
	}
	else if(element.attachEvent){
		element.attachEvent('on'+event,listener);
	}
	else{
		element['on'+event]=listener;
	}
}
function each(arr,fn){
	for(var cur=0,len=arr.length;cur<len;cur++){
		fn(arr[cur]);
	}
}
window.onload=function(){
	var container=document.getElementById('container');
	var buttonList=document.getElementsByTagName('input');
	var queue={
		str:[],

		leftPush:function(num){
			this.str.unshift(num);
			this.paint();
		},

		rightPush:function(num){
			this.str.push(num);
			this.paint();
		},
		isEmpty:function(){
			return (this.str.length==0);
		},
		leftPop:function(){
			if(!this.isEmpty()){
				console.log(this.str.shift());
				this.paint();
			}
			else{
				console.log('队列已空!');
			}
		},
		rightPop:function(){
			if(!this.isEmpty()){
				console.log(this.str.pop());
				this.paint();
			}
			else{
				console.log('已空');
			}
		},
		paint:function(){
			var str='';
			each(this.str,function(item){
				str+=('<div>'+parseInt(item)+'</div>')
			});
			container.innerHTML=str;
			addDivDelEvent();
		},
		deleteID:function(id){
			console.log(id);
			this.str.splice(id,1);
			this.paint();
		}
	}
	function addDivDelEvent(){
		for(var cur=0,len=container.childNodes.length;cur<len;cur++){
			addEvent(container.childNodes[cur],'click',function(cur){
				return function(){
					return queue.deleteID(cur);
				}(cur);
			})

		}
	}
	addEvent(buttonList[1], "click", function() {
        var input = buttonList[0].value;
        if ((/^[0-9]+$/).test(input)) {
            queue.leftPush(input);
        }
        else {
            alert("输入数字");
        }
    });
    addEvent(buttonList[2], "click", function() {
        var input = buttonList[0].value;
        if ((/^[0-9]+$/).test(input)) {
            queue.rightPush(input);
        }
        else {
            alert("输入数字");
        }
    });
    addEvent(buttonList[3], "click", function(){queue.leftPop()});
    addEvent(buttonList[4], "click", function(){queue.rightPop()});
}