const path = require("node:path")

const fullPath = path.join("src", "arquivo.js") // Junta todos estes argumentos em caminhos de pasta, sem precisar do ./
console.log(fullPath)

const directory = path.join(__dirname) // Obtém o nome completo do diretório atual
console.log(directory)

const relativePath = "../arquivos/relatorio.xsl" // Arquivo exemplo
const absolutePath = path.resolve(relativePath) // Parecido com o join, o 'resolve' transforma uma sequência de caminhos em um caminho absoluto
console.log(absolutePath) // E encontra caminhos no sistema de maneira segura, sendo mais absoluto

const fileName = path.basename(relativePath) // Retorna a ÚLTIMA parte de um caminho
console.log(fileName) // relatório.xsl

const ext = path.extname(relativePath) // Retorna o nome da extensão
console.log(ext) // .xsl