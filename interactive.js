function change(){
	document.getElementById("1").innerHTML="DONE";
}
function color(){
	document.getElementById("1").className= "class_2";
}
function can(){
	var canvas=document.getElementById("myCanvas");
	canvas.style.backgroundColor = "blue";
	var context= canvas.getContext("2d");
	context.fillStyle = "yellow";
	context.fillRect(10,10,50,50);
	context.fillRect(60,60,50,50);
	context.fillStyle= "black";
	context.font= "10px Arial";
	context.fillText("Hello",15,45);
}
var image;
function upload(){
	var imgcanvas= document.getElementById("image");
	var fileinput= document.getElementById("finput");
	alert("You chose"+fileinput);
	image= new SimpleImage(fileinput);
	image.drawTo(imgcanvas);
}
function greyscale(){
for(var pixel of image.values()){
var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
pixel.setRed(avg);
pixel.setGreen(avg);
pixel.setBlue(avg);
}
var canvas= document.getElementById("grey");
image.drawTo(canvas);
}