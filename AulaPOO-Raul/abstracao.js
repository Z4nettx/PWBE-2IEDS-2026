class Pessoa {
    constructor(nome) {
        if (this.constructor === Pessoa) {
            throw new Error ("Não podemos criar um objeto de pessoa diretamente")
        }
        this.nome = nome;
    }
}
class Aluno extends Pessoa { }

const rafael = new Aluno("Rafael");
const pessoa = new Pessoa("teste");
console.log(pessoa.nome);