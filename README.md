# Biblioteca JS

Sistema de gerenciamento de biblioteca desenvolvido em JavaScript e executado via terminal com Node.js.

O projeto permite consultar, cadastrar, emprestar e devolver livros, além de apresentar informações estatísticas sobre o catálogo.

## Sobre o projeto

O Biblioteca JS foi desenvolvido como um mini-projeto avaliativo com o objetivo de aplicar, de forma prática, os principais conceitos de programação estudados durante o curso.

A aplicação funciona inteiramente pelo terminal e utiliza um menu interativo para permitir que o usuário realize operações sobre um catálogo de livros mantido em memória.

O desenvolvimento priorizou uma estrutura simples e modular, mantendo cada funcionalidade principal em seu próprio arquivo e utilizando os recursos nativos do JavaScript.

## Funcionalidades

O sistema possui as seguintes funcionalidades:

- Listagem de todos os livros cadastrados;
- Busca de livro pelo título;
- Listagem de livros disponíveis;
- Cadastro de novos livros;
- Realização de empréstimos;
- Realização de devoluções;
- Exibição de estatísticas da biblioteca;
- Menu interativo executado pelo terminal.

## Requisitos funcionais

| Requisito | Descrição |
| --- | --- |
| RF01 | Menu principal para acesso às funcionalidades do sistema |
| RF02 | Listagem de todos os livros cadastrados |
| RF03 | Busca de livro pelo título |
| RF04 | Listagem dos livros disponíveis para empréstimo |
| RF05 | Cadastro de novos livros |
| RF06 | Realização de empréstimos |
| RF07 | Realização de devoluções |
| RF08 | Exibição das estatísticas da biblioteca |
| RF09 | Representação dos livros através da classe `Livro` |
| RF10 | Organização das funcionalidades através de módulos com `import` e `export` |

## Validações adicionais

Além dos requisitos obrigatórios, foram implementadas algumas validações para melhorar a consistência da aplicação:

- Validação de campos obrigatórios;
- Validação do número de páginas como inteiro positivo;
- Prevenção de títulos duplicados;
- Tratamento de entradas com espaços e diferenças entre maiúsculas e minúsculas;
- Tratamento de buscas, empréstimos e devoluções inválidas;
- Tratamento de catálogo vazio ou sem livros disponíveis;
- Validação de tentativa de devolver um livro que já está disponível;
- Proteção do cálculo de estatísticas quando não houver livros cadastrados.

Essas validações complementam o escopo principal sem alterar os requisitos funcionais definidos para o projeto.

## Tecnologias utilizadas

- JavaScript
- Node.js
- prompt-sync
- Git
- GitHub

## Conceitos aplicados

Durante o desenvolvimento foram utilizados conceitos fundamentais da linguagem JavaScript, incluindo:

- Variáveis e constantes;
- Tipos de dados;
- Operadores;
- Estruturas condicionais;
- switch;
- Estruturas de repetição;
- Funções;
- Arrays;
- Objetos;
- Classes;
- Métodos de arrays, como find, filter, forEach e reduce;
- Modularização;
- import e export;
- Entrada e saída de dados pelo terminal.

## Estrutura do projeto

```text
biblioteca-js/
├── src/
│   ├── index.js
│   ├── Livro.js
│   ├── dadosLivros.js
│   ├── listarLivros.js
│   ├── buscarLivro.js
│   ├── listarDisponiveis.js
│   ├── cadastrarLivro.js
│   ├── realizarEmprestimo.js
│   ├── realizarDevolucao.js
│   └── exibirEstatisticas.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

### Responsabilidade dos arquivos

| Arquivo | Responsabilidade |
| ----------------------- | -------------------------------------------------------------------------- |
| index.js | Inicialização da aplicação, exibição do menu e controle do fluxo principal |
| Livro.js | Definição da classe Livro |
| dadosLivros.js | Catálogo inicial utilizado pela aplicação |
| listarLivros.js | Listagem de todos os livros |
| buscarLivro.js | Busca de livro pelo título |
| listarDisponiveis.js | Listagem dos livros disponíveis |
| cadastrarLivro.js | Cadastro e validação de novos livros |
| realizarEmprestimo.js | Controle de empréstimos |
| realizarDevolucao.js | Controle de devoluções |
| exibirEstatisticas.js | Cálculo e exibição das estatísticas da biblioteca |

## Pré-requisitos

Para executar o projeto é necessário possuir instalado:

- Node.js;
- npm;
- Git, caso deseje clonar o repositório.

## Instalação

Clone o repositório:

```bash
git clone https://github.com/Jessiwoy/biblioteca-js.git
```

Acesse o diretório do projeto:

```bash
cd biblioteca-js
```

Instale as dependências:

```bash
npm install
```

## Execução

Execute a aplicação com:

```bash
npm start
```

O sistema será iniciado no terminal e apresentará o menu principal:

```text
SISTEMA DE BIBLIOTECA

1 - Listar livros
2 - Buscar livro
3 - Listar livros disponíveis
4 - Cadastrar livro
5 - Realizar empréstimo
6 - Realizar devolução
7 - Exibir estatísticas
0 - Sair
```

Digite o número correspondente à operação desejada e siga as instruções exibidas no terminal.

## Armazenamento dos dados

Os dados são mantidos em memória durante a execução da aplicação.

Isso significa que novos livros cadastrados, empréstimos e devoluções permanecem disponíveis enquanto o programa estiver em execução.

Ao encerrar e iniciar novamente a aplicação, o catálogo retorna ao seu estado inicial.

Não é utilizada persistência em banco de dados ou arquivo externo.

## Versionamento

O desenvolvimento utiliza Git para controle de versão e uma organização baseada em branches.

As principais branches são:

- main: versão estável do projeto;
- develop: integração das funcionalidades durante o desenvolvimento;
- feature/*: implementação de funcionalidades;
- refactor/*: melhorias e ajustes de código;
- docs/*: alterações de documentação.

As mensagens de commit seguem o padrão Conventional Commits, utilizando prefixos como:

```text
feat:
refactor:
chore:
style:
docs:
```

Essa organização permite manter um histórico de desenvolvimento claro e incremental.

## Demonstração

O vídeo de demonstração do projeto será disponibilizado antes da entrega final.

**Vídeo:** [adicionar link]

## Repositório

O código-fonte está disponível em:

https://github.com/Jessiwoy/biblioteca-js

## Autor

Jessica Woytuski

Projeto desenvolvido como parte das atividades avaliativas do curso.
