function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // Bom Dia!
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#f1e6b2'
        msg.innerHTML += '<br>Bom dia!'
    } else if (hora >= 12 && hora < 18) {
        // Boa Tarde!
        img.src = 'fototarde.jpg'
        document.body.style.background = '#fdbb63'
        msg.innerHTML += '<br>Boa tarde!'
    } else {
        // Boa Noite!
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#202030'
        msg.innerHTML += '<br>Boa noite!'
    }
}