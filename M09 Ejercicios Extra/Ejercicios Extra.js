/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:

      /*let arraydearray=[];
      for (let key in objeto){
         arraydearray.push([key,objeto[key]])
      } return arraydearray;*/

      /*let arraydearray = Object.entries(objeto);
      return arraydearray;*/

      
        var arrayPadre = [];
         var objetoArray = Object.entries(objeto);
           for (let i = 0; i <objetoArray.length ; i++){
             arrayPadre.push(objetoArray[i]);
            }
             return arrayPadre;
    
} 

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
     let objeto = {};
     for (i = 0 ; i < string.length ; i++){
      if (objeto.hasOwnProperty(string[i])){
         objeto[string[i]] = objeto[string[i]] + 1
      } else {
         objeto[string[i]] = 1;
      }
     }
     return objeto;

   /* var resultado = {}
     var n = 0
      var contador = 0
        do{ for (var i = 0; i<string.length; i++){
            if (string[i]=== string[n]){
              contador++
            }else continue;
         }
          resultado[string[n]]=contador
          contador = 0
          n++
          } while (n<string.length)
            return resultado;*/
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
       var mayuscula = "";
       var minúscula = "";
         for ( i = 0 ; i < string.length ; i++){
            if( string[i] === string[i].toLowerCase()){
                 minúscula = minúscula + string[i];
               } else {
                     mayuscula = mayuscula + string[i];
                  }
         } 
          return mayuscula + minúscula;

}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let array = frase.split(' ');
   let invertida = array.map ( function(ele){
      return ele.split('').reverse().join('')
   });
    return invertida.join(' ');
     /*var nueva = frase.split(""); 
      var fraseinvertida = [];
      for ( let i = nueva.length - 1 ; i >= 0 ; i--){
         fraseinvertida.push(nueva[i])
      }
       var nueva1 = fraseinvertida.toString();
        var nueva2= nueva1.split(" ");
        var nueva3 = [];
        for ( let j = nueva2.length - 1 ; j >= 0 ; j--){
         nueva3.push(nueva2[j]);}
      
       return nueva3.reverse().join("");*/
}
function capicua(numero) {
   // Si el número que recibes es capicúa debes
   // retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   
   let capicua = numero.toString().split('').reverse().join('')
      if( numero == capicua){
         return "Es capicua";
      } else {
         return "No es capicua";
      };
}


function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   //      string 'a e b u c d'
   //      array [a , e , b , u , c , d]
   //             0   1   2   3   4   5
   // arraynuevo[ e , u , d ]
   // 'eud'
   
   let array = string.split('');
   let arraynuevo = [];
   for (i = 0 ; i < array.length ; i++){
      if( array[i] === 'a' || array[i] === 'b' || array[i] === 'c' ){
         continue;         
      } else {
         arraynuevo.push(array[i]);
      }
   }
    return arraynuevo.join('');
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   /*cambio = true;
   while (cambio){
      cambio = false;
     for (i = 0 ; i < arrayOfStrings.length - 1 ; i++){
       if(arrayOfStrings[i].length > arrayOfStrings[i+1].length){
           let aux = arrayOfStrings[i];
           arrayOfStrings[i] = arrayOfStrings [i+1];
           arrayOfStrings[i+1]= aux;
           cambio = true;
         }
      }

   }
    return arrayOfStrings;*/

    let arraysorete = arrayOfStrings.sort( function(a,b){
      return a.length - b.length
     })
      return arraysorete;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   
   let arraynuevo = []; 
   for (i = 0 ; i< array1.length ; i++){
      for (j = 0 ; j <array2.length ; j++){
         if ( array1[i] == array2[j] ){
            arraynuevo.push(array1[i]);
         } 
      } 
   } return arraynuevo;



}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
