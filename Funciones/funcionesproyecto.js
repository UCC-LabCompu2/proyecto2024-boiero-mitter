/**
 * Descripcion: Esta funcion lo que va hacer es, calcular el IMC de una persona mediante calculadora, y tambien va a comprobar que no haya ingresado datos invalidos.

 */

let calcularIMC=()=> {
    const genMasc= document.getElementById("masculino").checked;
    const genFem= document.getElementById("femenino").checked;
    const alturaMetros=document.getElementById("altura").value/100;
    const imc= document.getElementById("peso").value/ (alturaMetros*alturaMetros);
    let clasfificacion;
    if (isNaN(document.getElementById("peso").value) || isNaN(alturaMetros) || alturaMetros === 0) {
        console.log(isNaN(document.getElementById("peso").value), isNaN(alturaMetros), alturaMetros === 0);
        alert("Por favor, ingrese valores válidos para peso y altura.");
        return;
    }else if (!genFem && !genMasc){
        alert("Por favor, seleccione un género.");
    }
    else if (imc<18.5){
        clasfificacion="Bajo peso";
    }else if (imc>=18.5 && imc<=24.9){
        clasfificacion="Peso adecuado";
    }else if (imc>=25 && imc<=29.9){
        clasfificacion="Sobrepeso";
    }else if (imc>=30 && imc<=34.9){
        clasfificacion="Obesidad grado 1";
    }else if (imc>=35 && imc<=39.9){
        clasfificacion="Obesidad grado 2";
    }else if (imc>=40){
        clasfificacion="Obesidad grado 3";
    }

    localStorage.setItem("imc", imc.toString());
    localStorage.setItem("clasificacion", clasfificacion);
    window.open("index2.html");
}

let mostrarImc=()=>{
    console.log(localStorage.getItem("imc"));
    console.log(localStorage.getItem("clasificacion"));
}