document.addEventListener('DOMContentLoaded',function(event){
    // El texto que se muestra con animación
    var dataText = [ "CAPA"];
    
    // Esto comienza el efecto de maquina de escribir
    // Continua hasta el final del texto
    function typeWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < (text.length)) {
        // Añade los caracteres
       document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
        // tiempo de espera entre cada caracter
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      // Espacio para aplicar otra función de callback
      else if (typeof fnCallback == 'function') {
        // Despues de este intervalo se llama de nuevo a la funcion
        setTimeout(fnCallback, 700);
      }
    }
    // Ejecuta la animación
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 20000);
       }
       // chequeo para la existencia de dataText[i]
      if (i < dataText[i].length) {
        // Si efectivamente el texto existe entonces procede 
       typeWriter(dataText[i], 0, function(){
         // loop de la animación
         StartTextAnimation(i + 1);
       });
      }
    }
    // Tiempo en el cual comienza la animación
    StartTextAnimation(0);
  });