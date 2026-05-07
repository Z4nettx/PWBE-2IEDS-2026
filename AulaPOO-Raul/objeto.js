// Criando um objeto de aluno manualmente
const aluno = {
    nome: "Avanze",
    idade: 75,

    // função completa

    /* estudar: function () {
        console.log(`${this.nome} está estudando`);
    } */
    estudar: () => {
        console.log(`${aluno.nome} está estudando`);  
    }
};
console.log(aluno.nome)
aluno.estudar();