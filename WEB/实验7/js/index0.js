var x=document.querySelector(".m-test").getElementsByTagName("li");
document.querySelector(".m-jpg").style.display="none";
document.querySelector(".box").style.display="none";
document.querySelector("#add").style.display="none";
document.querySelector(".m-tb").style.display="none";
document.querySelector("span").style.display="none";
for(let i=0;i<x.length;i++){
	console.log(i);
	x[i].addEventListener("click",()=>{
		document.querySelector(".m-jpg").style.display="block";
		document.querySelector(".box").style.display="block";
	})
}
document.querySelector(".m-jpg").addEventListener("click",()=>{
		document.querySelector(".m-jpg").style.display="none";
		document.querySelector(".box").style.display="none";
	})

document.querySelector(".f1").addEventListener("click",()=>{
		document.querySelector("span").style.display="none";
		document.querySelector(".m-tb").style.display="none";
		document.querySelector(".g-index").style.display="block";
	})
document.querySelector(".f2").addEventListener("click",()=>{
		document.querySelector("span").style.display="block";
		document.querySelector(".m-tb").style.display="none";
		document.querySelector(".g-index").style.display="none";
	})
document.querySelector(".f3").addEventListener("click",()=>{
		document.querySelector("span").style.display="none";
		document.querySelector(".m-tb").style.display="block";
		document.querySelector(".g-index").style.display="none";
	})
