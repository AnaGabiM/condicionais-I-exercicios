let nacionalidade = prompt ("Escreva aqui sua nacionalidade")

function naci (nacionalidade) {
    if (nacionalidade === "Brasileira") {
        console.log(nacionalidade)
    }
    else if (nacionalidade === "Argentina") {
        console.log(nacionalidade)
    }
    else if (nacionalidade === "Uruguaia") {
        console.log(nacionalidade)
    }
    else if (nacionalidade === "Chilena") {
        console.log(nacionalidade)
    }   
    else if (nacionalidade === "Colombiana") {
        console.log(nacionalidade)
    }
    else {
        console.log("Nacionalidade não encontrada")
    }
}
console.log(naci(nacionalidade))