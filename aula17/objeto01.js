let amigo = {nome: 'Jose', sexo: 'M', peso: 85.4, engordar(p=0){
    console.group('Engordou')
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo} pesa ${amigo.peso}Kg`)