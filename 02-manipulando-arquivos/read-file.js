// LENDO ARQUIVOS COM O FS
const fs = require("node:fs")

const exist = fs.existsSync("./arquivo.txt") // Verificando se o arquivo existe

if (exist) {
    fs.readFile("arquivo.txt", "utf-8", (error, data) => { // Aqui ele pede apenas o CAMINHO para ler e a CODIFICAÇÃO mas com a mensagem do erro e os dados do arquivo
        if (error) {
            console.log("Erro ao ler o arquivo! ", error.message)
            return
        }
        console.log(data)
    })
} else {
    console.log("Arquivo não existe")
}