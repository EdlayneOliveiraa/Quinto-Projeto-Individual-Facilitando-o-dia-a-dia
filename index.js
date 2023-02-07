const prompt = require('prompt-sync')
const comando = prompt()

const propiedadecss = (input) => {
    let output = []
    while (input != "sair") {
        output.push(input);
        input = comando("Digite uma propriedade CSS ou digite sair: ")
    }
        
    let resultado = output.sort().join("\n")
    console.log(resultado)
    
}
propiedadecss()