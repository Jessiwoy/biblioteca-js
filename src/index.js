import promptSync from "prompt-sync";
import { listarLivros } from "./listarLivros.js";
import { buscarLivro } from "./buscarLivro.js";
import { listarDisponiveis } from "./listarDisponiveis.js";
import { cadastrarLivro } from "./cadastrarLivro.js";
import { realizarEmprestimo } from "./realizarEmprestimo.js";
import { realizarDevolucao } from "./realizarDevolucao.js";
import { exibirEstatisticas } from "./exibirEstatisticas.js";

const prompt = promptSync();

let opcao = "";

while (opcao !== "0") {
  console.log("\nSISTEMA DE BIBLIOTECA");
  console.log("1 - Listar livros");
  console.log("2 - Buscar livro");
  console.log("3 - Listar livros disponíveis");
  console.log("4 - Cadastrar livro");
  console.log("5 - Realizar empréstimo");
  console.log("6 - Realizar devolução");
  console.log("7 - Exibir estatísticas");
  console.log("0 - Sair");

  const entrada = prompt("Escolha uma opção: ");
  opcao = entrada === null ? "0" : entrada.trim();

  if (opcao === "1") {
    listarLivros();
  } else if (opcao === "2") {
    const titulo = prompt("Digite o título do livro: ");
    buscarLivro(titulo);
  } else if (opcao === "3") {
    listarDisponiveis();
  } else if (opcao === "4") {
    cadastrarLivro();
  } else if (opcao === "5") {
    const titulo = prompt("Digite o título do livro: ");
    realizarEmprestimo(titulo);
  } else if (opcao === "6") {
    const titulo = prompt("Digite o título do livro: ");
    realizarDevolucao(titulo);
  } else if (opcao === "7") {
    exibirEstatisticas();
  } else if (opcao === "0") {
    console.log("Sistema encerrado.");
  } else {
    console.log("Opção inválida.");
  }
}
