function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 13
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        img.src = 'imagens/manha.jpg'
        teste.style.background = 'lightblue'

    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde.jpg'
        teste.style.background = 'lightgray'

    } else {
        img.src = 'imagens/noite.jpg'
        teste.style.background = 'black'
    }
}

