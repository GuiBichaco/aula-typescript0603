// 1. Interfaces e Tipagem Avançada

/*Exercício 1
Crie uma interface chamada Carro, que contenha as seguintes propriedades:
marca (string)
modelo (string)
ano (number)
motor (opcional, string)
Em seguida, crie um objeto chamado meuCarro que implemente essa interface e exiba os dados no console.*/

interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    motor?: string;
}

const meuCarro: Carro = {
    marca: "Ferrari",
    modelo: "La Ferrari",
    ano: 2025,
};  
console.log(meuCarro)


//Exercício 2

/*Crie uma interface Multiplicacao para tipar uma função que recebe dois números e retorna o resultado da multiplicação deles.
Depois, implemente essa função e teste com diferentes valores.*/

interface Multiplicacao {
    (a: number, b: number): number;
}
const multiplicacao: Multiplicacao = (x,y) => x * y;
console.log(multiplicacao(5,2))