# explain


只用了伪类的方式实现用content来填充
```css
/*\2714是一个钩*/
.checkbox:checked+label:after{
	content: '\8678';
	color: red;
	font-size: 20px;
	position: absolute;
	top: -4px;
	left: 2px;
}
```
还有好多中符号表示法自己搜索


[展示地址][1]
  [1]: https://rawgit.com/TeemoJUN/study/master/one/checkbox.html
  
  
  
