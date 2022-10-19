//variables
var cal1 = prompt("Ingrese la primera calificacion");
var cal2 = prompt("Ingrese la segunda calificación calificacion");
var cal3 = prompt("Ingrese la tercera calificacion");

//método
cal1=parseFloat(cal1);
cal2=parseFloat(cal2);
cal3=parseFloat(cal3);
resultado=0;

resultado=(cal1+cal2+cal3)/3;

if(resultado>=70){
    document.write("La calificacion es aprobatoria: "+resultado+".");
} else{
    document.write("La calificacion es reprobatoria: "+resultado+".");
} 
document.write("<br /><br />Calificacion 1 = "+cal1+"<br />"+"Calificacion 2 = "+cal2+ "<br />Calificacion 3="+cal3);



