const os = require("node:os")

const platform = os.platform() // Mostra qual a plataforma do SO que está usando agora
console.log(`Plataforma do Sistema Operacional: ${platform}`) // win32

const arch = os.arch() // Mostra qual a arquitetura do SO
console.log(`Arquitetura do SO: ${arch}`) // x64

const cpus = os.cpus() // Quantidade de núcles no processador e informações do processador
console.log("Informação da CPU: ", cpus)

const memory = os.totalmem() // Retorna a memória total do SO
console.log(`Memória total do PC: ${memory} bytes`)