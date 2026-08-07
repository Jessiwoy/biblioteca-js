import { dadosLivros } from "./dadosLivros.js";

// RF03 - Buscar livro
export function buscarLivro(titulo) {
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

  console.log(`Título: ${livroEncontrado.titulo}`);
  console.log(`Autor: ${livroEncontrado.autor}`);
  console.log(`Categoria: ${livroEncontrado.categoria}`);
  console.log(`Páginas: ${livroEncontrado.paginas}`);
  console.log(
    `Disponibilidade: ${
      livroEncontrado.disponivel ? "Disponível" : "Indisponível"
    }`
  );
}
