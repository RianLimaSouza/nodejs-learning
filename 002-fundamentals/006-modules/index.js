const minimist = require("minimist")

const args = minimist(process.argv.slice(2))

console.log(args)

const nome = args['nome']
const profissao = args['profissao']
console.log(`O ${nome} é ${profissao}`)

// colocar no terminal:
// node index.js --nome=matheus