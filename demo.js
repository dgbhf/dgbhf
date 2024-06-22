var demo=document.querySelector("#demo");
var demo1=document.querySelector('#demo1');
var demo2=document.querySelector("#demo2");

var speed=30;
demo2.innerHTML=demo1.innerHTML;

function marquee(){
	if(demo.scrollLeft==demo2.offsetWidth){
		demo.scrollLeft=0;
	}else{
		demo.scrollLeft++
	}
}
MyMar=setInterval(marquee,speed)
demo.onmouseout=function(){
	MyMar=setInterval(marquee,speed)
}
demo.onmouseover=function(){
	clearInterval(MyMar);
}
