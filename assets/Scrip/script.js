const fulImgBox = document.getElementById("fulImgBox"),
fulImg = document.getElementById("fulImg");

function openFulImg(reference){
    fulImgBox.style.display = "flex";
    fulImg.src = reference
}
function closeImg(){
    fulImgBox.style.display = "none";
}

    // Mensaje para que me dejen su mail posibles clientes
    function mostrarAlertaEnInicio() {

        if ((window.location.pathname === '/index.html' && !localStorage.getItem('alertaMostrada'))) {
        var respuesta = prompt("Por favor, deja tu correo para conocer más de mi trabajo:");
        
        if (respuesta !== null) {
            alert("Gracias por tu interes, muy pronto te voy a estar enviando contenido.");
        } else {
            alert("Si cambias de opinión, estaré aquí.");
        }
    
        localStorage.setItem('alertaMostrada', 'true');
        }
    }

    window.onload = function() {
        mostrarAlertaEnInicio();
    };