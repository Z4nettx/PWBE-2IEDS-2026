// Classe para criar vários objetos
class Aluno {
    constructor(nome, idade) {
        // constructor deve ser um método tradicional e executa automaticamente]
        this.nome = nome;
        this.idade = idade;

    }

    estudar = () => {
        console.log(`${this.nome} está estudando e tem ${this.idade} anos!`);
    }
}

const pedro = new Aluno("Pedro", 20);
const ana = new Aluno("Ana", 50);
console.log(pedro.nome);
console.log(ana.idade);
console.log(pedro.estudar());