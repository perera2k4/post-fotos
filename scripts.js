let taCurtido = true;
document.querySelector(".like").addEventListener("click", function() {
    if (taCurtido == true) { 
        taCurtido = false;
        document.querySelector(".like").src = "icones/coracao_red.png";
    } else{
        taCurtido = true;
        document.querySelector(".like").src = "icones/coracao.png";  
    }
})

document.querySelector("#btnComentar").addEventListener("click", function() {
    document.querySelector(".comentarios").innerHTML += `
    <div class="comentario">
        <span>Bruno Pereira</span>
        <p>${document.querySelector("#txtComentario").value}</p>
    </div>
    `;
})

document.querySelector(".comentar").addEventListener("click", function() {
    document.querySelector(".formulario").style.visibility = "visible";
})

document.querySelector(".foto").addEventListener("dblclick", function(){
    document.querySelector(".like").src = "icones/coracao_red.png";
    taCurtido = true;    
})