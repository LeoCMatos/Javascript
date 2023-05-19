let num = [5,8,2,9,3]
let c = 20


while(c < 40){
    num.push(c)
    c++
}


console.log(`nosso vetor é o ${num}, e o nosso vetor tem ${num.length} posições`)

console.log(`O primeiro valor do vetor é ${num[0]}`)

let valor = 36

let pos = num.indexOf(valor)

if(pos == -1){
    console.log('O valor não foi encontrado')
} else{
    console.log(`O valor ${valor} está na posição ${pos}`)
}

