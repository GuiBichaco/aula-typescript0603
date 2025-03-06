/**
 * 1. Interfaces e Tipagem Avançada
 * Exercício 1
 * 
 * @description Crie uma interface chamada Carro, que contenha as seguintes propriedades:
 * @description marca (string)
 * @description modelo (string)
 * @description ano (number)
 * @description motor (opcional, string)
 * @description Em seguida, crie um objeto chamado meuCarro que implemente essa interface e exiba os dados no console.
 */

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

/**
 * Exercício 2
 * @description Crie uma interface Multiplicacao para tipar uma função que recebe dois números e retorna o resultado da multiplicação deles.
 * @description Depois, implemente essa função e teste com diferentes valores.
 * 
 * Multiplica dois números e retorna o resultado.
 * @param a Primeiro número
 * @param b Segundo número
 * @returns Multiplicação de dois valores
 * 
 */

interface Multiplicacao {
    (a: number, b: number): number;
}
const multiplicacao: Multiplicacao = (x,y) => x * y;
console.log(multiplicacao(5,2))
console.log(multiplicacao(9,6))
console.log(multiplicacao(4,1))
console.log(multiplicacao(6,7))

/**
 * 2. Generics
 * 
 * Exercício 3
 * @description Crie uma função genérica chamada inverterArray<T>, que recebe um array de qualquer tipo e retorna um novo array com os elementos invertidos.
 * @description Teste a função com um array de números e um array de strings
 * 
 */