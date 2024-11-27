// RENOMEANDO ARQUIVOS COM O FS
const fs = require("node:fs")

fs.rename("arquivo.txt", "arquivo.csv", (error) => { // Passando como parâmetro o ARQUIVO ATUAL e o NOME QUE VAI SER RENOMEADO
    if (error) {
        console.log("Erro ao renomear o arquivo! ", error.message)
        return
    } else {
        console.log("Arquivo renomeado!")
    }
})