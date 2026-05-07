//Encapsulamento eu mostro o atributo so quando eu quiser, ele é determinado pela #
class aluno {
    #nota;

    constructor (nome, idade, nota){
        this.idade = idade;
        this.nome = nome;
        this.#nota = nota;
    };
    // arrowfunciton
    verNota = () => this.#nota;
}

const avanze = new aluno ("Enzinho" , 67 , 10);

console.log(avanze.nome);
console.log(avanze.idade);
console.log(avanze.nota);
console.log(avanze.verNota());