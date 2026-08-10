import { dadosLivros } from "./dadosLivros.js";

// RF06 - Realizar empréstimo
export function realizarEmprestimo(titulo) {
  if (!titulo || titulo.trim() === "") {
    console.log("Digite um título válido.");
    return;
  }

  const tituloBuscado = titulo.trim().toLowerCase();

  const livroEncontrado = dadosLivros.find(
    (livro) => livro.titulo.toLowerCase() === tituloBuscado
  );

  if (!livroEncontrado) {
    console.log("Livro não encontrado.");
    return;
  }

  if (!livroEncontrado.disponivel) {
    console.log("Livro indisponível.");
    return;
  }

  livroEncontrado.disponivel = false;
  console.log("Livro emprestado com sucesso.");
}
