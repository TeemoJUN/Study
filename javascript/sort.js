	
	window.onload=function(){
		var num=document.querySelector("#num");
		var sub=document.querySelector("#sub");
		var sort=document.querySelector("#sort");
		var view=document.querySelector("#view");

		var arr=new Array();
		var i=-1;
		var latch=false;
		//当提交值时会清原来的默认的
		sub.onclick=function(){
			if(!latch){
				view.innerHTML="";
				latch=true;
			}
			check();
		}

		//验证输入值
		function check(){
			var input=num.value;
			if((/^([1-9]\d|100)$/).test(input)){
				if(i<=60){
					arr.push(input);
					i++;
					showBar(arr,i);
				}
				else{
					alert("太多啦");
				}
			}
			else{
				alert("请输入10-100");
			}
		}
		//显示值
		function showBar(array,index){
			var div=document.createElement("div")
			var test=document.createTextNode(array[index]);
			div.appendChild(test);
			div.style.height=2*array[index]+"px";
			div.style.top=200-2*array[index]+"px";
			div.style.width="18px";
			div.style.left=index*22+"px";
			div.className="bar"
			view.appendChild(div);
		}

		//先交换nodeA和nodeB的距离，，在交换它俩在父节点pNode中真实存在的位置
		function swap(pNode,nodeA,nodeB){
			var rangeA=nodeA.style.left;
			nodeA.style.left=nodeB.style.left;
			nodeB.style.left=rangeA;
			var moveNode=pNode.removeChild(nodeA);
			pNode.insertBefore(moveNode,nodeB);
		}

		//比较nodeA的值是否小于nodeB的值
		function less(nodeA,nodeB){
			var numA=parseInt(nodeA.firstChild.nodeValue);
			var numB=parseInt(nodeB.firstChild.nodeValue);
			return numA<numB;
		}

		sort.onclick=function(){
			//insertSortOne();
			insertSortTwo();
		}
		//insertSortOne有问题导致要点击sort排序多多次才能共，因为交换啦值之后没有动态的改变barList
		//打断点才发现的
		/*function insertSortOne(){
			var barList=document.querySelectorAll(".bar");
			
			var len=barList.length;
			
			for(var i=1;i<len;i++){

				for(var j=i;j>0&&less(barList[j],barList[j-1]);j--){
				
					swap(view,barList[j],barList[j-1]);
		
				}
				console.log(i);

			}
		}*/
		

		function insertSortTwo(){
			
			var barList=document.querySelectorAll(".bar");
			
			var len=barList.length;
			
			for(var i=1;i<len;i++){
				for(var j=i;j>0&&less(barList[j],barList[j-1]);j--){
				
					swap(view,barList[j],barList[j-1]);
					barList=document.querySelectorAll(".bar");//在改变之后再重新刷新barList
		
				}
			}
		}

		/*默认预览值*/
		(function(){
			var def=[21,32,45,89,100,76,11,10,22,45,67];
			for(var i=0;i<def.length;i++){
				showBar(def,i);
			}
		})()

	}