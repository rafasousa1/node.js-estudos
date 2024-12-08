const readline = require("node:readline")

const rl = readline.createInterface({input: process.stdin, output: process.stdout})

rl.on("line", (input) => {
    rl.write(`Você digitou: ${input}`)
})

rl.question("Qual seu nome? ", (name) => {
    rl.write(`Olá ${name}!\n`)
    rl.close()
})

rl.on("close", () => {
    rl.write("Saindo...")
    process.exit(0)
})

rl.on("SIGINT", () => {
    rl.question("Deseja Sair? (s/n) ", (answer) => {
        if (answer.trim().toLowerCase() === "s") {
            rl.write("Saindo...")
            process.exit(0)
        } else {
            rl.write("Você escolheu continar a execução")
        }
    })
})