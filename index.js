function nextQuestion(currentQuestion) {
    var current = document.getElementById('question' + currentQuestion);
    var next = document.getElementById('question' + (currentQuestion + 1));

    // Ocultar la pregunta actual
    current.classList.remove('active');
    
    // Mostrar la siguiente pregunta
    next.classList.add('active');
}

function checkAnswer(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Verificar si la respuesta seleccionada es "Sí" o "No"
    var answer = document.querySelector('input[name="q5"]:checked').value;
    if (answer === "Sí") {
        // Mostrar el cuadro con texto y la imagen de fondo
        var resultBox = document.getElementById('resultBox');
        resultBox.style.display = 'block';
    } else {
        // Regresar a la pregunta 5 si la respuesta es "No"
        var question5 = document.getElementById('question5');
        question5.classList.add('active');
    }
}
