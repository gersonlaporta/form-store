
// Llamamos al id botón cargar (en el html) y cuando hacemos click activamos función "cargarDatos"
document.getElementById('cargar').addEventListener('click', cargarDatos);

// Iniciamos función "cargarDatos"
function cargarDatos(e) {
    // A todo el contenido del id "contact" del formulario lo reseteamos mediante la función .reset();
    document.getElementById("contact").reset();

    // Prevenimos que se envíe el formulario si no tiene datos con .preventDefault();
    e.preventDefault();

    // Crear el objeto xmlhttprequest
    const xhr = new XMLHttpRequest();

    // Instancio conexión con la función .open a la variable xhr
    xhr.open('POST', 'http://date.jsontest.com/', true);

        // Una vez que carga la llamada se comprueba la conexión
        xhr.onload = function() {
            // Si el status de la conexión es 200: Correcto | 403: Prohibido | 404: No encontrado
            if (this.status === 200) {
                // console.log(JSON.parse( this.responseText ));
                // .parse me traduce a formato JSON (objeto) para después mostrarlos por pantalla
                const respuesta = JSON.parse(this.responseText);

                    // Iniciamos template literal para pintar en pantalla
                    const htmlTemplate = `
                        <ul class="list">
                            <li><i class="fas fa-check-circle"></i></li>
                            <li>Enviado correctamente</li>
                            <li>${respuesta.date}</li>
                        </ul>
                    `;

                // Inyectamos en el div resultado la variable htmlTemplate para que se muestre en pantalla
                document.getElementById('resultado').innerHTML = htmlTemplate;
                
                    ocultarResult('block');
                    mostrarResult('none');
                
                setTimeout(()=>{ 
                // Mostrar resultado durante 3 segundos
                
                // ocultar resultado
                    ocultarResult('none');
                    document.getElementById('desaparece').style.display = "block";
                }, 3000);

            }
            
        }

   // Enviar el request
    xhr.send();
}

// Creamos otra función que oculta los resultados
function ocultarResult(vista) {
    const result = document.getElementById('resultado');
    result.style.display = vista;
}

function mostrarResult(vista){
    const reaparece = document.getElementById('desaparece');
    reaparece.style.display = vista;
}


