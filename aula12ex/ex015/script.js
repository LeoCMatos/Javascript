function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fem = document.getElementById('fem')
        var mas = document.getElementById('mas') 
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(mas.checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'meninocriança.jpg')
            } else if(idade >= 10 && idade < 21){
                img.setAttribute('src', 'homemjovem.jpg')
            }else if (idade >= 21 && idade < 50){
                img.setAttribute('src', 'homemadulto.jpg')
            } else {
                img.setAttribute('src', 'homemvelho.jpg')
            }
        } else if (fem.checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'meninacriança.jpg')
            } else if(idade >= 10 && idade < 21){
                img.setAttribute('src', 'mulhernova.jpg')
            }else if (idade >= 21 && idade < 50){
                img.setAttribute('src', 'mulheradulta.jpg')
            } else {
                img.setAttribute('src', 'mulhervelha.jpg')
            }
        }
        res.style.textAlign = 'Center'
        if(idade == 1){
            res.innerHTML = `Detectamos ${genero} com ${idade} ano.<br>`
            res.appendChild(img)
        } else {
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>`
            res.appendChild(img)
        }

        
    }

}