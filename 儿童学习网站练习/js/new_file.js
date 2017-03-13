window.onload = function(){
	var btns = document.getElementsByClassName("btns")[0];
	var spans = btns.getElementsByTagName('span');
	var colors = new Array();
	var colors = ['#3d3630','#b7295a','#a2b040','#f2af00'];
	var list = document.getElementsByClassName('list')[0];	
	var lis = list.getElementsByTagName('li');
	
	for( var i=0;i<lis.length;i++){
		lis[i].style.backgroundColor=colors[i];
	}
	var imgboxs = document.getElementsByClassName('eventimg');
	var masks = document.getElementsByClassName('mask');
//	alert(masks.length);
/*第一种解决方法，循环解决*/
/*闭包的问题*/
		
	/*第二种解决mask方法,挨个试*/
	imgboxs[0].onmouseover=function(){
		masks[0].style.display = "block";
	}
	imgboxs[0].onmouseout=function(){
		masks[0].style.display = "none";
	}
	imgboxs[1].onmouseover=function(){
		masks[1].style.display = "block";
	}
	imgboxs[1].onmouseout=function(){
		masks[1].style.display = "none";
	}
	imgboxs[2].onmouseover=function(){
		masks[2].style.display = "block";
	}
	imgboxs[2].onmouseout=function(){
		masks[2].style.display = "none";
	}
}
