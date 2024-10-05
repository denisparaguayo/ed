document.getElementById('form').addEventListener('submit', function (event) {
	event.preventDefault();

	var input = document.getElementById('inputField').value;
	var correctCode = 'iphone'; // Código correcto
	var messageElement = document.getElementById('message');

	if (input === correctCode) {
		messageElement.textContent = 'Código correcto. ¡Bienvenido!';
		messageElement.style.color = 'green';
		// Mostrar el pop-up con el efecto de letras tipo "hack"
		document.getElementById('popup').style.display = 'block';
		startMatrixEffect(); // Iniciar el efecto Matrix
	} else {
		messageElement.textContent = 'Código incorrecto, intenta de nuevo.';
		messageElement.style.color = 'red';
	}
});

// Cerrar el pop-up y redirigir a un enlace
document.getElementById('closePopup').addEventListener('click', function () {
	document.getElementById('popup').style.display = 'none';
	window.location.href = 'https://www.instagram.com/p/C98OCb8xpfi/'; // Reemplaza este enlace con el que quieras
});

// Función para iniciar el efecto Matrix
function startMatrixEffect() {
	var matrixEffect = document.getElementById('matrixEffect');
	var characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var columns = Math.floor(matrixEffect.offsetWidth / 10); // Ajusta el número de columnas
	var drops = [];

	// Inicializamos las posiciones de las letras (una por columna)
	for (var i = 0; i < columns; i++) {
		drops[i] = Math.random() * matrixEffect.offsetHeight; // Posiciones iniciales aleatorias
	}

	// Función para dibujar las letras
	function draw() {
		// Limpiamos el contenido antes de redibujar
		matrixEffect.innerHTML = '';

		// Recorremos cada "columna" (letra que cae)
		for (var i = 0; i < drops.length; i++) {
			var text = characters[Math.floor(Math.random() * characters.length)];
			matrixEffect.innerHTML += `<span style="position:absolute; left:${
				i * 20
			}px; top:${drops[i]}px">${text}</span>`;

			// Hacer que las letras caigan
			drops[i] += 20;

			// Si la letra ha caído fuera del contenedor, reiniciamos su posición arriba
			if (drops[i] > matrixEffect.offsetHeight) {
				drops[i] = 0; // Vuelve a caer desde arriba
			}
		}
	}

	// Ejecutamos la función de dibujo en intervalos para simular la caída infinita
	setInterval(draw, 50); // Ajustar la velocidad de las letras que caen
}
