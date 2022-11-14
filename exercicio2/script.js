let idade;
let isMaiorIdade;
let isCursandoOutraFaculdade;

function funcao (idade, isMaiorIdade, isCursandoOutraFaculdade) {
    if (idade >= 18) {
        console.log("É maior de idade")
    }
    else {
        console.log("Não é maior de idade")
    }

    if (isMaiorIdade === true) {
        console.log("Terminou o ensino médio")
    }
    else {
        console.log("Não terminou o ensino médio")
    }

    if (isCursandoOutraFaculdade === false) {
        console.log("Não esta cursando faculdade")
    }
    else {
        console.log("Esta cursando faculdade")
    }
}