//Funciones Helpers
function esPar(numero) {
    return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado=0, nuevoElemento){

            return valorAcumulado + nuevoElemento;

        }
    );
  
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function medianaSalarios(lista){
    const mitad = parseInt(lista.length/2);

    if (esPar(lista.length)){
        const personaMitad1 = lista[mitad-1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);

        return mediana;

    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }

}

//Funciones de negocio
//Calculo mediana general de salario
const salariosCol = colombia.map(
    function(persona) {
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

const medianaSalariosCol = medianaSalarios(salariosColSorted);

//Calculo mediana del Top 5
const spliceStart = (salariosColSorted.length - 5);
const spliceCount = (salariosColSorted.length - spliceStart);

const salariosColTop10 = salariosColSorted.splice(
    spliceStart, 
    spliceCount
);

const medianaSalariosColTop5 = medianaSalarios(salariosColTop10);

console.log(
    "Mediana de Salarios:" + medianaSalariosCol
);
console.log(
    "Mediana de Salarios Top 5:" + medianaSalariosColTop5
);