   
   //variables
    var numero1 = prompt("Ingrese numero 1: ");
    var numero2 = prompt("Ingrese numero 2: ");
   
    //mandar a llamar
    numero1=parseFloat(numero1);
    numero2=parseFloat(numero2);
    
    //metodo de comparación.
       if (numero1 == numero2){
       document.write("Numero 1, Numero 2 son iguales: "+numero1+".");
       } else {
          if (numero1 > numero2){
            document.write("Numero 1 es Mayor y vale: "+numero1+".");
           } else {
             if (numero2 > numero1){
                document.write("Numero 2 es Mayor y vale: "+numero2+".");
            }
          } 
          document.write("<br /><br />Numero 1 = "+numero1+"<br />"+"Numero 2 = "+numero2+"<br />");
   }