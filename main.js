var canvas=document.getElementById("canvas1");
var pluma=canvas.getContext("2d");
function circulo(){

    pluma.strokeStyle=color;
    
    pluma.lineWidth=3;
    pluma.beginPath();
    pluma.arc(x,y,40,0,2* Math.PI);
    pluma.stroke();
}
canvas.addEventListener("mousedown", dibujar);
function dibujar(click){
x=click.clientX - canvas.offsetLeft;
y=click.clientY - canvas.offsetTop;
color= document.getElementById("color").value
circulo();
}
function borrar(){
    pluma.clearRect(0, 0, canvas.width, canvas.height)
}