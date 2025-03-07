# Inicializando um Projeto TypeScript

## 📌 Inicializar o Node.js (se necessário)
```sh
npm init -y
```

## 📌 Instalar o TypeScript localmente no projeto
```sh
npm install typescript --save-dev
```

## 📌 Criar o arquivo de configuração do TypeScript
```sh
npx tsc --init
```

Isso criará um arquivo `tsconfig.json` com as configurações do TypeScript.

## ⚙️ Editar o `tsconfig.json` para definir a saída dos arquivos JavaScript

Abra o `tsconfig.json` e adicione ou edite os seguintes parâmetros:

```json
{
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src",
    "target": "ES6",
    "module": "CommonJS"
  }
}
```

## 📂 Criar as pastas `src` e `dist`
> **📝 Selecione "New Folder" e digite `src`, depois pressione Enter.**  
> **📝 Repita o processo para criar a pasta `dist`.**  

> ⚡ **Usar o Explorer do VSCode facilita a visualização da estrutura do projeto e evita erros comuns ao digitar comandos no terminal.** 🚀

## 📁 Estrutura de Diretórios
```
📦 aula-typescript/
├── 📂 .git/            # (Não fica visível no VSCode)
├── 📄 .gitignore       # Arquivo para ignorar arquivos no git
├── 📄 package.json     # Configurações do projeto Node.js
├── 📄 tsconfig.json    # Configuração do TypeScript
├── 📂 src/             # Diretório para arquivos TypeScript
│   ├── 📄 index.ts     # Arquivo principal do TypeScript
├── 📂 dist/            # Diretório onde os arquivos JavaScript compilados serão gerados
```

## 🚫 Configurando o `.gitignore`
Abra o arquivo `.gitignore` e adicione o seguinte conteúdo para ignorar o `node_modules` e arquivos compilados:

```
node_modules/
dist/
```

## 📝 Criando um Arquivo TypeScript e Compilando para JavaScript

Crie o arquivo `index.ts` dentro da pasta `src/`.

No arquivo `src/index.ts`, escreva o seguinte código (*Exemplo*):

```ts
let mensagem: string = "Olá, TypeScript!";
console.log(mensagem);
```

## 🔧 Compilar o TypeScript para JavaScript
No terminal, execute:
```sh
npx tsc
```
Isso criará um arquivo `dist/index.js`.

## ▶️ Executar o código JavaScript gerado
```sh
node dist/index.js
```

Se tudo estiver correto, a saída será:
```
Olá, TypeScript!
```

