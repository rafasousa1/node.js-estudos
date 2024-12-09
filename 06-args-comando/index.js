const args = process.argv.slice(2)
console.log(args)

const argumentosNomeados = {}

process.argv.slice(2).forEach((arg, index, array) => {
    if(arg.startsWith("--")) {
        const nomeArg = arg.slice(2)
        const argValue = array[index + 1]
        argumentosNomeados[nomeArg] = argValue
    }
})

console.log(argumentosNomeados)