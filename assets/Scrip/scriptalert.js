    // Mensaje para que me dejen su mail posibles clientes
    //.function mostrarAlertaEnInicio() {
        var respuesta = prompt("Por favor, deja tu correo para conocer más de mi trabajo:");
        
        if (respuesta !== null) {
            alert("Gracias por tu interes, muy pronto te voy a estar enviando contenido.");
        } 
        
        else {
            alert("Si cambias de opinión, estaré aquí.");
        }
    
        localStorage.setItem('alertaMostrada', 'true');
        }

    //window.onload = function() {
        mostrarAlertaEnInicio();
    };