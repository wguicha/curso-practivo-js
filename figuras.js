//Codigo del cuadrado
console.group("Cuadrado")

function perimetroCuadrado(lado){
    return lado*4
}

//console.log("Los lados del cuadrado miden: "+ ladoCuadrado + "cm.");

//console.log("El Perimetro del cuadrado mide: "+ perimetroCuadrado + "cm.");

function areaCuadrado(ladoCuadrado){
    return ladoCuadrado*2
} 
//console.log("El área del cuadrado mide: "+ areaCuadrado +"cm2.");

console.groupEnd();
/*
//Codigo del Triangulo
console.group("Triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log("Los lados del triangulo miden: "+ ladoTriangulo1 + "cm, " + ladoTriangulo2 +"cm, " + baseTriangulo + "cm.");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El Perimetro del Triangulo mide: "+ perimetroTriangulo + "cm.");

const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
console.log("El área del cuadrado mide: "+ areaTriangulo +"cm2.");

console.groupEnd();

//Codigo del circulo
console.group("Circulo");

const radioCirculo = 4;
const diametroCirculo = radioCirculo*2;
const PI = Math.PI;

const perimetroCirculo = diametroCirculo*PI;
const areaCirculo = (radioCirculo*radioCirculo)*PI;

console.log("El radio del circulo es " +radioCirculo+"cm.");
console.log("El diametro del circulo es " +diametroCirculo+"cm.");
console.log("El perimetro del circulo es " +perimetroCirculo+"cm.");
console.log("El area del circulo es " +areaCirculo+"cm.");

console.groupEnd();
*/

function calcularPerimetroCuadro(){
    const input = document.getElementById("inputCuadrado"); 
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);

    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado"); 
    const value = input.value;
    
    const area = areaCuadrado(value);

    alert(area);

}
