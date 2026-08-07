import { dadosLivros } from "./dadosLivros.js";

// RF07 - Realizar devolução
export function realizarDevolucao(titulo) {
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

  livroEncontrado.disponivel = true;
  console.log("Livro devolvido com sucesso.");
}
