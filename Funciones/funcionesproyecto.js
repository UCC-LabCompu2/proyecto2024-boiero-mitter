/**
 * Descripcion: Esta funcion lo que va hacer es calcular el IMC de una persona mediante calculadora, y tambien va a comprobar que no haya ingresado datos invalidos.
 *
 */


function calcularIMC(id,valor) {
    if (isNaN(valor)) {
        alert("Se ingreso un valor invalido en " + id);
        document.imcForm.peso.value = "";
        document.imcForm.altura.value = "";
    }
}