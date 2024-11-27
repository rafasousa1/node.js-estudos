// CRIANDO E MANIPULANDO ARQUIVOS USANDO O MÓDULO "Fs"
const fs = require("node:fs") // Importando o FS (Esse tipo de importação é para módulos nativos)

const content = "Salmos 23: 4" // Colocando na varável o conteúdo do arquivo

fs.writeFile("arquivo.txt", content, "utf-8", (error) => { // Colocando como parâmetro o CAMINHO, o CONTEÚDO que quer escrever, a CODIFICAÇÃO, e o tratar do erro
    if (error) {
    console.log("Não foi possível executar! ", error.message)
    return
    }
    console.log("Arquivo assíncrono criado!")
})

// try {
//     fs.writeFileSync("./arquivo.txt", "Jesus loves you!", "utf-8") // Colocando como parâmetro o CAMINHO, o CONTEÚDO que quer escrever e a CODIFICAÇÃO
//     console.log("Arquivo criado!")
// } catch (error) {
//     console.log("Erro ao escrever o arquivo! ", error.message)
// }