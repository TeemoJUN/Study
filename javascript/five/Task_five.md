# Task_five
讲解下我是如何实现的吧

---

```javascript
//先交换nodeA和nodeB的距离，，在交换它俩在父节点pNode中真实存在的位置
		function swap(pNode,nodeA,nodeB){
			//交换A B两节点的显示位置
			var rangeA=nodeA.style.left;
			nodeA.style.left=nodeB.style.left;
			nodeB.style.left=rangeA;
			
			//交换A B两个节点在DOM树中的位置
			var moveNode=pNode.removeChild(nodeA);
			pNode.insertBefore(moveNode,nodeB);
		}
```
+ pNode ：父节点
+ nodeA： 子节点A
+ nodeB：子节点B

因为在排序当中我们的目的是交换两个节位置；不但要交换他们在DOM树中的位置，还要交换他们的显示位置

```javascript
//比较nodeA的值是否小于nodeB的值
		function less(nodeA,nodeB){
			var numA=parseInt(nodeA.firstChild.nodeValue);
			var numB=parseInt(nodeB.firstChild.nodeValue);
			return numA<numB;
		}
```
+ nodeA.firstChild.nodeValue;用来获取其中的值

```javascript
//插入排序
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
```




