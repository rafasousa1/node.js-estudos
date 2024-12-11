import fs from 'node:fs'
import path from 'node:path'
import readline from 'node:readline'

run()

function escapeHtmlSpecialCharacters(text) {
    return text.replace(/[<>&]/g, (match) => {
        switch (match) {
            case "<":
                return '&lt;'
            case ">":
                return '&gt;'
            case "&":
                return '&amp'
            default:
                return match
        }
    })
}


function escapeHtmlFile(inputFilePath, outputFilePath) {
    try {
        const fileContent = fs.readFileSync(inputFilePath, 'utf-8')
        const escapedContent = escapeHtmlSpecialCharacters(fileContent)
        fs.writeFileSync(outputFilePath, escapedContent, 'utf-8')
        console.log(`Arquivo escapado com sucesso ${outputFilePath}`)
    } catch(error) {
        console.log('Erro ', error.message)
        process.exit(1)
    }
}

function askFilePath(question) {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout})

    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer)
            rl.close()
        })
    })
}

async function userInteraction() {
    let inputPath = process.argv[2]
    if (!inputPath) {
        inputPath = await askFilePath('Informe o caminho: ')
    }
    inputPath = path.resolve(inputPath)

    const defaultName = `escaped_${path.basename(inputPath)}.txt`
    const answer = await askFilePath('Informe o caminho do arquivo de saída: ')
    let outputPath = answer.length > 0 ? answer : defaultName
    outputPath = path.resolve(outputPath)

    escapeHtmlFile(inputPath, outputPath)
}

function run() {
    if (process.argv.length >= 4) {
        escapeHtmlFile(path.resolve(path.resolve(process.argv[2]), path.resolve(process.argv[3])))
    } else {
        console.log('Argumentos não informados!')
        userInteraction()
    }
}