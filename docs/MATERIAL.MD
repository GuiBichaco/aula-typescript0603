# 🚀 Aula Avançada de TypeScript

## 🎯 Objetivo
Nesta aula, aprofundaremos o conhecimento sobre TypeScript, abordando conceitos avançados como interfaces, generics, manipulação de tipos e boas práticas. Vamos reforçar os aprendizados com exercícios práticos para consolidar os conceitos apresentados.

## 1️⃣ Interfaces e Tipagem Avançada
### 📌 O que são Interfaces?
Interfaces são estruturas que permitem definir contratos para objetos, garantindo que possuam determinados atributos e métodos.

```ts
interface Usuario {
    nome: string;
    idade: number;
    email?: string; // Propriedade opcional
}
const usuario1: Usuario = {
    nome: "Ana",
    idade: 25
};
```

### 📌 Interfaces com Funções
Interfaces também podem ser usadas para tipar funções.

```ts
interface Soma {
    (a: number, b: number): number;
}
const somar: Soma = (x, y) => x + y;
console.log(somar(10, 5));
```

### 📌 Extensão de Interfaces
Podemos estender interfaces para reutilizar propriedades e manter um código mais organizado.

```ts
interface Animal {
    nome: string;
    idade: number;
}
interface Cachorro extends Animal {
    raca: string;
}
const meuCachorro: Cachorro = {
    nome: "Rex",
    idade: 4,
    raca: "Labrador"
};
```

## 2️⃣ Generics
### 📌 O que são Generics?
Generics permitem a criação de código reutilizável e flexível, permitindo que uma função, interface ou classe trabalhe com diferentes tipos sem perder a segurança da tipagem.

```ts
function retornarElemento<T>(elemento: T): T {
    return elemento;
}
console.log(retornarElemento<number>(10)); // 10
console.log(retornarElemento<string>("Olá TypeScript")); // "Olá TypeScript"
```

### 📌 Generics em Interfaces

```ts
interface RespostaAPI<T> {
    data: T;
    sucesso: boolean;
}
const respostaTexto: RespostaAPI<string> = {
    data: "Dados recebidos com sucesso!",
    sucesso: true
};
```

## 3️⃣ Manipulação Avançada de Tipos
### 📌 Type Aliases

```ts
type ID = string | number;
function buscarUsuario(id: ID) {
    console.log(`Buscando usuário com ID: ${id}`);
}
```

### 📌 Union Types

```ts
let resposta: string | boolean;
resposta = "Sucesso";
console.log(resposta);
resposta = true;
console.log(resposta);
```

### 📌 Intersection Types

```ts
type Pessoa = {
    nome: string;
    idade: number;
};
type Funcionario = {
    cargo: string;
    salario: number;
};
type FuncionarioDetalhado = Pessoa & Funcionario;
const funcionario1: FuncionarioDetalhado = {
    nome: "Carlos",
    idade: 35,
    cargo: "Engenheiro",
    salario: 5000
};
```

## 4️⃣ Boas Práticas em TypeScript
### 📌 Use Tipos Específicos Sempre que Possível

```ts
let valorCerto: string | number = "Teste";
```

### 📌 Utilize Readonly para Propriedades Imutáveis

```ts
interface Config {
    readonly versao: string;
}
const configApp: Config = { versao: "1.0.0" };
```

### 📌 Documente Seu Código

```ts
/**
 * Soma dois números e retorna o resultado.
 * @param a Primeiro número
 * @param b Segundo número
 * @returns Soma dos dois valores
 */
function somarValores(a: number, b: number): number {
    return a + b;
}
```

