// EXCLUI UM ARQUIVO USANDO O "FS"
const fs = require("node:fs")

fs.unlink("arquivo.csv", (error) => { // Passando como parâmetro apenas o arquivo que quer deletar e o tratamento de erros
    if (error) {
        console.log("Erro ao deletar o arquivo", error.message)
        return
    } else {
        console.log("Arquivo deletado!")
    }
})