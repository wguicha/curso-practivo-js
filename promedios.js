//Calculo de promedio
function calcularMediaAritmetica(lista){
/*
    let sumaLista = 0;

    for (let i=0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i];
    }
*/
    //Metodo Reduce

    const sumaLista = lista.reduce(
        function(valorAcumulado=0, nuevoElemento){

            return valorAcumulado + nuevoElemento;

        }
    );
   
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//Calculo de la mediana
//Hallamos la mitad de la lista
let mediana;

function medianaLista(lista){
    lista.sort(function(a,b) {
        return a - b;
    });
    console.log(lista);
    if(esPar(lista.length)){
        const elemento1 = parseInt(lista.length/2)-1
        const elemento2 = parseInt(lista.length/2)
        mediana = calcularMediaAritmetica([lista[elemento1], lista[elemento2]]);

    }else{
        mediana = lista[parseInt(lista.length/2)];
    }

    console.log(mediana);

}

function esPar(numero) {
    if (numero % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

//CALCULO DE LA MODA

function modaLista(lista){
      const listaCount ={};
//Con esta funcion creamos el array de objetos con la cantidad que se repite cada elemento.  
      lista.map(
        function(elemento){
            if(listaCount[elemento]){
                listaCount[elemento] += 1;
            }else{
                listaCount[elemento]=1;
            }
          }        
      )
//Ahora ese array objetos vamos a volverlo una array de array para determinar el de mayor cantidad
//ordenando por el segundo elemento:
      const listaArray = Object.entries(listaCount).sort(
        function(elementoA, elementoB){  
          return elementoA[1] - elementoB[1]; 
  
        }
    );   
    const moda = listaArray[listaArray.length-1];

    console.log(moda);
}
