/**
 * Descripcion: Esta funcion lo que va hacer es, calcular el IMC de una persona mediante calculadora, y tambien va a comprobar que no haya ingresado datos invalidos.
 @param {string} id - El inputs de  masculino,femenino,altura, peso.
 @param {boolean}  -genMasc, genFem.
 @param {number} imc - El valor de los inputs en metros, yardas, pies, o pulgadas.
 @return
 */
let calcularIMC = () => {
    const genMasc = document.getElementById("masculino").checked;
    const genFem = document.getElementById("femenino").checked;
    const alturaMetros = document.getElementById("altura").value / 100;
    const imc = document.getElementById("peso").value / (alturaMetros * alturaMetros);
    let clasfificacion;
    if (isNaN(document.getElementById("peso").value) || isNaN(alturaMetros) || alturaMetros === 0) {
        console.log(isNaN(document.getElementById("peso").value), isNaN(alturaMetros), alturaMetros === 0);
        alert("Por favor, ingrese valores válidos para peso y altura.");
        return;
    } else if (!genFem && !genMasc) {
        alert("Por favor, seleccione un género.");
        return;
    } else if (imc < 18.5) {
        clasfificacion = "Bajo peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        clasfificacion = "Peso adecuado";
    } else if (imc >= 25 && imc <= 29.9) {
        clasfificacion = "Sobrepeso";
    } else if (imc >= 30 && imc <= 34.9) {
        clasfificacion = "Obesidad grado 1";
    } else if (imc >= 35 && imc <= 39.9) {
        clasfificacion = "Obesidad grado 2";
    } else if (imc >= 40) {
        clasfificacion = "Obesidad grado 3";
    }

    localStorage.setItem("imc", imc.toString());
    localStorage.setItem("clasificacion", clasfificacion);
    window.open("index2.html");
    mostrarImc();
    dibujarTacometro(imc);
}


let mostrarImc = () => {
    const imc = localStorage.getItem("imc");
    const clasificacion = localStorage.getItem("clasificacion");
    document.getElementById("clasif").innerText = `Su indice IMC es: ${Math.round(imc * 100) / 100} con el valor ${clasificacion}`;
}



let dibujarTacometro = (imc) => {
    const canvas = document.getElementById('tacometroCanvas');
    const ctx = canvas.getContext('2d');

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 400;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    dibujarAguja(ctx, imc, centerX, centerY, radius);

    const segments = [
        { start: Math.PI, end: Math.PI + Math.PI / 6, color: 'lightblue', label: 'Bajo peso' },
        { start: Math.PI + Math.PI / 6, end: Math.PI + 2 * Math.PI / 6, color: 'green', label: 'Adecuado' },
        { start: Math.PI + 2 * Math.PI / 6, end: Math.PI + 3 * Math.PI / 6, color: 'yellow', label: 'Sobrepeso' },
        { start: Math.PI + 3 * Math.PI / 6, end: Math.PI + 4 * Math.PI / 6, color: 'orange', label: 'Obesidad grado 1' },
        { start: Math.PI + 4 * Math.PI / 6, end: Math.PI + 5 * Math.PI / 6, color: 'lightpink', label: 'Obesidad grado 2' },
        { start: Math.PI + 5 * Math.PI / 6, end: 2 * Math.PI, color: 'red', label: 'Obesidad grado 3' }
    ];

    segments.forEach(segment => {
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, segment.start, segment.end, false);
        ctx.lineTo(centerX, centerY);
        ctx.fillStyle = segment.color;
        ctx.fill();
        ctx.closePath();


        const midAngle = (segment.start + segment.end) / 2;
        const textX = centerX + (radius - 60) * Math.cos(midAngle);
        const textY = centerY + (radius - 60) * Math.sin(midAngle);
        ctx.fillStyle = 'black';
        ctx.font = '15px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(segment.label, textX, textY);
    });


    for (let i = 0; i <= 6; i++) {
        let angle = Math.PI + (i * Math.PI / 6);
        let x = centerX + radius * Math.cos(angle);
        let y = centerY + radius * Math.sin(angle);
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = 'white';
        ctx.stroke();
        ctx.closePath();
    }

    function dibujarAguja(ctx, imc, centerX, centerY, radius) {
        let angle;
        if (imc < 18.5) {
            angle = Math.PI + (Math.PI / 12);
        } else if (imc < 25) {
            angle = Math.PI + (Math.PI / 6) + (Math.PI / 12);
        } else if (imc < 30) {
            angle = Math.PI + (2 * Math.PI / 6) + (Math.PI / 12);
        } else if (imc < 35) {
            angle = Math.PI + (3 * Math.PI / 6) + (Math.PI / 12);
        } else if (imc < 40) {
            angle = Math.PI + (4 * Math.PI / 6) + (Math.PI / 12);
        } else {
            angle = Math.PI + (5 * Math.PI / 6) + (Math.PI / 12);
        }


        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        const endX = centerX + (radius - 20) * Math.cos(angle);
        const endY = centerY + (radius - 20) * Math.sin(angle);
        ctx.lineTo(endX, endY);
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.stroke();
        ctx.closePath();
    }
}