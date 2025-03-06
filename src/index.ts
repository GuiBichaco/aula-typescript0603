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
 * @method slice() 
 * @description Cria uma cópia superficial de uma parte de um array, retornando um novo array com os elementos selecionados. Não altera o array original.
 * 
 * @method reverse()
 * @description Inverte os elementos de um array in place (ou seja, no próprio array), e retorna o array invertido. Altera o array original.
 * 
 */

function inverterArray<T>(array: T[]): T[] {
    return array.slice().reverse();
}
const numeros: number[] = [1,2,3,4,5];
console.log(inverterArray(numeros)); //Resultado esperado [5,4,3,2,1]

const palavras: string[] = ["Olá", "Mundo", "TypeScript"];
console.log(inverterArray(palavras)); // Resultado esperado ["typescript", "mundo", "olá"]

/**
 * Exercício 4
 * 
 * @description Crie uma interface genérica chamada Repositorio<T>, que tenha um método salvar(dado: T): void e um método obterTodos(): T[].
 * @description Depois, crie uma implementação dessa interface para armazenar uma lista de usuários (com nome e email).
 * 
 * 
 */

interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
}
class UsuarioRepositorio implements Repositorio<{ nome: string; email: string }> {
    private usuarios: { nome: string; email: string }[] = [];
    salvar(dado: { nome: string; email: string }): void {
        this.usuarios.push(dado);
    }
    obterTodos(): { nome: string; email: string }[] {
        return this.usuarios;
    }
}
// Teste da implementação
const repo = new UsuarioRepositorio();
repo.salvar({ nome: "João", email: "joao@email.com" });
repo.salvar({ nome: "Maria", email: "maria@email.com" });
console.log("Lista de usuários:", repo.obterTodos());