import { dadosLivros } from "./dadosLivros.js";

// RF02 - Listar livros
export function listarLivros() {
  dadosLivros.forEach((livro) => {
    console.log(`Título: ${livro.titulo.toUpperCase()}`);
    console.log(`Autor: ${livro.autor}`);
    console.log(`Categoria: ${livro.categoria}`);
    console.log(`Páginas: ${livro.paginas}`);
    console.log(
      `Disponibilidade: ${livro.disponivel ? "Disponível" : "Indisponível"}`
    );
    console.log("------------------------------");
  });
}
