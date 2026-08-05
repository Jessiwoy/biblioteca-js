import promptSync from "prompt-sync";
import { Livro } from "./Livro.js";
import { dadosLivros } from "./dadosLivros.js";

const prompt = promptSync();

// RF05 - Cadastrar livro
export function cadastrarLivro() {
  const titulo = prompt("Título: ");
  const autor = prompt("Autor: ");
  const categoria = prompt("Categoria: ");
  const paginas = Number(prompt("Páginas: "));

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
