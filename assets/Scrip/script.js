const fulImgBox = document.getElementById("fulImgBox"),
fulImg = document.getElementById("fulImg");

function openFulImg(reference){
    fulImgBox.style.display = "flex";
    fulImg.src = reference
}
function closeImg(){
    fulImgBox.style.display = "none";
}


function mostrarAlerta() {
    var respuesta = prompt("Dejame tu correo para conocer lo más nuevo de mi trabajo:");
    
    if (respuesta !== null) {
    alert("Gracias por tu interes, muy pronto te voy a estar enviando contenido.");
    } else {
    alert(" Si cambias de opinión, estaré aquí.");
    }
}

window.onload = function() {
    mostrarAlerta();
};
