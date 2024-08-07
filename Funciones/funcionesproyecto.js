let angle = 0;

/**
 * Descripcion: Esta funcion lo que va hacer es, calcular el IMC de una persona mediante calculadora, y tambien va a comprobar que no haya ingresado datos invalidos.
 * @method calcularIMC.
 * @return {void}
 */
let calcularIMC = () => {
    const genMasc = document.getElementById("masculino").checked;
    const genFem = document.getElementById("femenino").checked;
    const alturaMetros = document.getElementById("altura").value / 100;
<<<<<<< HEAD
    const peso = document.getElementById("peso").value;
    const imc = peso / (alturaMetros * alturaMetros);
=======
    const imc = document.getElementById("peso").value / (alturaMetros * alturaMetros);
>>>>>>> dc701318f582bfa30b6cee8aaeab688086bcb5fb
    let clasfificacion;

    if (isNaN(peso) || isNaN(alturaMetros) || alturaMetros === 0) {
        console.log(isNaN(peso), isNaN(alturaMetros), alturaMetros === 0);
        alert("Por favor, ingrese valores válidos para peso y altura.");
        return;
    } else if (!genFem && !genMasc) {
        alert("Por favor, seleccione un género.");
        return;
<<<<<<< HEAD
    } else if (peso <= 1 || peso >= 1000) {
        alert("Por favor, ingrese un peso válido entre 1 kg y 1000 kg.");
        return;
    } else if (document.getElementById("altura").value <= 0 || document.getElementById("altura").value >= 300) {
        alert("Por favor, ingrese una altura válida entre 1 cm y 300 cm.");
        return;
    } else if (imc < 18.5) {
=======
    }else if (document.getElementById("peso").value <= 20 || document.getElementById("peso").value >= 1000) {
        alert("Por favor, ingrese un peso válido entre 20 kg y 1000 kg.");
        return;
    } else if (document.getElementById("altura").value < 110 || document.getElementById("altura").value >= 300) {
        alert("Por favor, ingrese una altura válida entre 110 cm y 300 cm.");
        return;
    }else if (imc < 18.5) {
>>>>>>> dc701318f582bfa30b6cee8aaeab688086bcb5fb
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
    dibujarTacometro();
    window.open("index2.html");
}

<<<<<<< HEAD
/**
 * Descripción: Dibuja un tacómetro en un elemento canvas y muestra la clasificación del IMC con colores y etiquetas del valor dado por la calculadora IMC.
 * @method dibujarTacometro.
 * @return {void}
 */
let dibujarTacometro = () => {
    const imc = localStorage.getItem("imc");
    const canvas = document.getElementById('tacometroCanvas');
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 200; // Ajustado el radio a 200 para caber en el canvas

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const segments = [
        { start: Math.PI, end: Math.PI + Math.PI / 6, color: 'lightblue', label: 'Bajo peso' },
        { start: Math.PI + Math.PI / 6, end: Math.PI + 2 * Math.PI / 6, color: 'green', label: 'Adecuado' },
        { start: Math.PI + 2 * Math.PI / 6, end: Math.PI + 3 * Math.PI / 6, color: 'yellow', label: 'Sobrepeso' },
        { start: Math.PI + 3 * Math.PI / 6, end: Math.PI + 4 * Math.PI / 6, color: 'orange', label: 'Obesidad grado 1' },
        { start: Math.PI + 4 * Math.PI / 6, end: Math.PI + 5 * Math.PI / 6, color: 'lightpink', label: 'Obesidad grado 2' },
        { start: Math.PI + 5 * Math.PI / 6, end: 2 * Math.PI, color: 'red', label: 'Obesidad grado 3' }
=======


/**
 * Descripción: Dibuja un tacómetro en un elemento canvas y muestra la clasificación del IMC con colores y etiquetas del valor dado por la calculadora IMC.
 * @method dibujarTacometro.
 * @return {void}
 */
let startangle = Math.PI, endAngle;
let animationFrameID;
let dibujarTacometro = () => {
    const imc = parseFloat(localStorage.getItem("imc"));
    const canvas = document.getElementById('tacometroCanvas');
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 400;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const segments = [
        {start: Math.PI, end: Math.PI + Math.PI / 6, color: 'lightblue', label: 'Bajo peso'},
        {start: Math.PI + Math.PI / 6, end: Math.PI + 2 * Math.PI / 6, color: 'green', label: 'Adecuado'},
        {start: Math.PI + 2 * Math.PI / 6, end: Math.PI + 3 * Math.PI / 6, color: 'yellow', label: 'Sobrepeso'},
        {start: Math.PI + 3 * Math.PI / 6, end: Math.PI + 4 * Math.PI / 6, color: 'orange', label: 'Obesidad grado 1'},
        {
            start: Math.PI + 4 * Math.PI / 6,
            end: Math.PI + 5 * Math.PI / 6,
            color: 'lightpink',
            label: 'Obesidad grado 2'
        },
        {start: Math.PI + 5 * Math.PI / 6, end: 2 * Math.PI, color: 'red', label: 'Obesidad grado 3'}
>>>>>>> dc701318f582bfa30b6cee8aaeab688086bcb5fb
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

<<<<<<< HEAD
    setTimeout(() => {
        animateNeedle(ctx, imc, centerX, centerY, radius);
    }, 3000);
    
=======
>>>>>>> dc701318f582bfa30b6cee8aaeab688086bcb5fb
    for (let i = 0; i <= 6; i++) {
        let angle = Math.PI + (i * Math.PI / 6);
        let x = centerX + radius * Math.cos(angle);
        let y = centerY + radius * Math.sin(angle);
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.lineWidth = 0.5;
<<<<<<< HEAD
        ctx.strokeStyle = 'white';
        ctx.stroke();
        ctx.closePath();
    }
}

/**
 * Descripción: Dibuja la aguja del tacómetro que apunta al valor del IMC en el segmento correspondiente al valor dado.
 * @method dibujarAguja.
 * @param {CanvasRenderingContext2D} ctx - El contexto del canvas donde se dibuja la aguja.
 * @param {number} imc - El valor del IMC a representar con la aguja.
 * @param {number} centerX - La coordenada X del centro del tacómetro.
 * @param {number} centerY - La coordenada Y del centro del tacómetro.
 * @param {number} radius - El radio del tacómetro.
 * @return {void}
 */
function dibujarAguja(ctx, angle, centerX, centerY, radius) {
    const endX = centerX + (radius) * Math.cos(angle);
    const endY = centerY + (radius) * Math.sin(angle);
=======
        ctx.strokeStyle = 'black';
        ctx.stroke();
        ctx.closePath();
    }

    if (imc < 18.5) {
        endAngle = Math.PI + (Math.PI / 6);
    } else if (imc >= 18.5 && imc <= 24.9) {
        endAngle = Math.PI + (2 * Math.PI / 6);
    } else if (imc >= 25 && imc <= 29.9) {
        endAngle = Math.PI + (3 * Math.PI / 6);
    } else if (imc >= 35 && imc <= 39.9) {
        endAngle = Math.PI + (4 * Math.PI / 6);
    } else if (imc >= 40) {
        endAngle = Math.PI + (5 * Math.PI / 6);
    } else {
        endAngle = 2 * Math.PI;
    }


    startangle += 0.03;
    const endX = centerX + radius * Math.cos(startangle);
    const endY = centerY + radius * Math.sin(startangle);
>>>>>>> dc701318f582bfa30b6cee8aaeab688086bcb5fb

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(endX, endY);
    ctx.lineWidth = 4;
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.closePath();
<<<<<<< HEAD
}

/**
 * Descripción: Anima la aguja del tacómetro para que se mueva suavemente a la posición correspondiente al valor del IMC.
 * @method animateNeedle.
 * @param {CanvasRenderingContext2D} ctx - El contexto del canvas donde se dibuja la aguja.
 * @param {number} imc - El valor del IMC a representar con la aguja.
 * @param {number} centerX - La coordenada X del centro del tacómetro.
 * @param {number} centerY - La coordenada Y del centro del tacómetro.
 * @param {number} radius - El radio del tacómetro.
 * @return {void}
 */
function animateNeedle(ctx, imc, centerX, centerY, radius) {
    let targetAngle;
    if (imc < 18.5) {
        targetAngle = Math.PI + (Math.PI / 12);
    } else if (imc < 25) {
        targetAngle = Math.PI + (Math.PI / 6) + (Math.PI / 12);
    } else if (imc < 30) {
        targetAngle = Math.PI + (2 * Math.PI / 6) + (Math.PI / 12);
    } else if (imc < 35) {
        targetAngle = Math.PI + (3 * Math.PI / 6) + (Math.PI / 12);
    } else if (imc < 40) {
        targetAngle = Math.PI + (4 * Math.PI / 6) + (Math.PI / 12);
    } else {
        targetAngle = Math.PI + (5 * Math.PI / 6) + (Math.PI / 12);
    }

    let currentAngle = Math.PI;
    const step = (targetAngle - currentAngle) / 60; // 60 pasos para la animación

    function stepAnimation() {
        if (Math.abs(targetAngle - currentAngle) < Math.abs(step)) {
            currentAngle = targetAngle;
        } else {
            currentAngle += step;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        dibujarTacometro();
        dibujarAguja(ctx, currentAngle, centerX, centerY, radius);
        if (currentAngle !== targetAngle) {
            requestAnimationFrame(stepAnimation);
        }
    }

    stepAnimation();
}
=======

    console.log(`El starangle es: ${startangle},el endangle es: ${endAngle}`);
    if (startangle <= endAngle) {
        animationFrameID = requestAnimationFrame(dibujarTacometro);
    } else {
        cancelAnimationFrame(animationFrameID);
    }
}


>>>>>>> dc701318f582bfa30b6cee8aaeab688086bcb5fb
