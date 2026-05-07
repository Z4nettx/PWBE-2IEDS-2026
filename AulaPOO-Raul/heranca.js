// classe base

class pessoa {
    constructor (nome, idade){
        this.nome = nome;
        this.idade = idade;
    };

    apresentar = ()=> console.log(`Olá, sou ${this.nome} e tenho ${this.idade} anos `)

}

// classe aluno herda de pessoas

class aluno extends pessoa{
    estudar = () => console.log (`${this.nome} está estudando`);
}

// classe professor herda de pessoas

class professor extends pessoa{
    ensinar = () => console.log (`${this.nome} está ensinado`);
}

// Criando Objetos (atributos)
const enzo = new aluno ("Enzo Avanze", 67);
const namorada = new professor ("Maria Quase Avanze", 21);

enzo.apresentar();
enzo.estudar();
namorada.apresentar();
namorada.ensinar();