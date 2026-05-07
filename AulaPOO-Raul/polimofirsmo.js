class Pessoas {
    constructor(nome) {
        this.nome = nome;
    }
    apresentar = () => console.log(`Olá, eu sou ${this.nome}`);

}
class Aluno extends Pessoas {
    apresentar = () => console.log(`Oi eu sou o Zanetti e meu nome é: ${this.nome}`);
}
class Professor extends Pessoas {
    apresentar = () => console.log(`Olá eu sou um professor: ${this.nome}`);
}

const kadooka = new Aluno("Enzo");
const mago = new Professor("Raul");

kadooka.apresentar()
