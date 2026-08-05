import { dadosLivros } from "./dadosLivros.js";

// RF04 - Listar livros disponíveis
export function listarDisponiveis() {
  const livrosDisponiveis = dadosLivros.filter(
    (livro) => livro.disponivel === true
  );

  livrosDisponiveis.forEach((livro) => {
    console.log(`Título: ${livro.titulo.toUpperCase()}`);
    console.log(`Autor: ${livro.autor}`);
    console.log(`Categoria: ${livro.categoria}`);
    console.log(`Páginas: ${livro.paginas}`);
    console.log("Disponibilidade: Disponível");
    console.log("------------------------------");
  });
}
