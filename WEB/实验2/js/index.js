var k = document.querySelector("#p1");
var list = document.querySelectorAll(".m-item");
var x = document.getElementsByClassName("m-item");
var d=new Date();

function Appendzero(obj){
	if(obj<10) return "0"+""+obj;
	else return obj;
}

k.addEventListener('click',()=>{
	alert("p1");
	document.getElementById("p1").style.color="red";
});

list[1].addEventListener('click',()=>{
	alert("p2");
	var date=d.getDate();
	var month=d.getMonth()+1;
	var h1 = document.querySelector("h1");
	h1.innerHTML=d.getFullYear()+"-"+Appendzero(month)+"-"+Appendzero(date);
});

list[2].addEventListener('click',()=>{
	alert("p3");
	for(var i=0;i<x.length;i++){
		x[i].classList.add("fn-active");
	}
})

list[3].addEventListener('click',()=>{
	alert("p4");
	x[7].parentNode.removeChild(x[7]);
})

list[4].addEventListener('click',()=>{
	alert("p5");
	window.open("http://www.taobao.com");
})

list[5].addEventListener('click',()=>{
	alert("p6");
	var ul = document.querySelector("ul");
	var createLi=document.createElement("li");
	var text=document.createTextNode("p9");
	createLi.appendChild(text);
	ul.appendChild(createLi);
})
list[6].addEventListener('click',()=>{
	alert("p7");
	var winWidth = document.body.scrollWidth - 12;
	document.getElementById("p1").parentNode.style.width = winWidth + 'px';
})