<?php

class Pessoa {

    public $nome;
    public $ocupacao;
    private $salario;

    public function __construct()
    {
        $this->nome = $nome;
        $this->ocupacao = $ocupacao;
        $this->salario = $salario;

    function falar(){
        if (empty($this->salario)) {
            echo "Olá, meu nome é $this->nome, exerco a função de $this->ocupacao no SENAI.";
        }
        echo "Olá, meu nome é $this->nome, exerco a função de $this->ocupacao no SENAI e recebo R$ $this->salario por mês.";
    }
    }
    
}

$marcos = new Pessoa("Marcos", "Diretor", 2000);

echo $marcos->falar();
