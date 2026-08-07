import promptSync from "prompt-sync";
import { Livro } from "./Livro.js";
import { dadosLivros } from "./dadosLivros.js";

const prompt = promptSync();

// RF05 - Cadastrar livro
export function cadastrarLivro() {
  const titulo = prompt("Título: ");
  const autor = prompt("Autor: ");
  const categoria = prompt("Categoria: ");
  const paginasTexto = prompt("Páginas: ");
  const paginas = Number(paginasTexto);

  if (!titulo || titulo.trim() === "") {
    console.log("Digite um título válido.");
    return;
  }

  if (!autor || autor.trim() === "") {
    console.log("Digite um autor válido.");
    return;
  }

  if (!categoria || categoria.trim() === "") {
    console.log("Digite uma categoria válida.");
    return;
  }

  if (
    !paginasTexto ||
    paginasTexto.trim() === "" ||
    !Number.isInteger(paginas) ||
    paginas <= 0
  ) {
    console.log("Digite uma quantidade de páginas válida.");
    return;
  }

  const novoLivro = new Livro(
    titulo.trim().toUpperCase(),
    autor.trim(),
    categoria.trim(),
    paginas,
    true
  );

  dadosLivros.push(novoLivro);

  console.log("Livro cadastrado com sucesso.");
}
