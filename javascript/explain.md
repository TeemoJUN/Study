# explain

先说下设计思路吧，这个是破题的想法,要求是
1. 输入值
2. 点击
3. 显示

所以就需要获取三个节点
```javascript
    var btn=document.querySelector("#button");
    var content=document.querySelector("#aqi-input");
    var show=document.querySelector("#aqi-display");
```
然后再获取content的值，我的想法是将其存取在一个数组中，让数组来做中间隔离层；在obj.getText()中将值（就是输入值）存贮在obj.arr中

在obj.render()获取值，传递给obj.createTag(),创建div

用obj.i来计数；

---

删除我是用事件委托来做的

因为点击事件会逐步上传，所以在父节点也可以捕获事件的发生，所以删除时我在span上捕获的
```javascript
  show.onclick=function(event){
    var target=event.target;//要删除的对象
    //console.log(target);就是那个要删除的div
    //console.log(this);就是id=aqi-display的span
    obj.deleteTag(this,target);
  }
```
还有就是在TaskOne.html中的那个注释有些不明吧，为什么不可以那样写!



