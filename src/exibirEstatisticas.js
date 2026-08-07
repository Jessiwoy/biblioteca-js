import { dadosLivros } from "./dadosLivros.js";

// RF08 - Exibir estatísticas
export function exibirEstatisticas() {
  const totalLivros = dadosLivros.length;
  const livrosDisponiveis = dadosLivros.filter(
    (livro) => livro.disponivel === true
  ).length;
  const livrosIndisponiveis = dadosLivros.filter(
    (livro) => livro.disponivel === false
  ).length;
  const totalPaginas = dadosLivros.reduce(
    (total, livro) => total + livro.paginas,
    0
  );
  const mediaPaginas = totalLivros === 0 ? 0 : totalPaginas / totalLivros;

  console.log(`Total de livros: ${totalLivros}`);
  console.log(`Livros disponíveis: ${livrosDisponiveis}`);
  console.log(`Livros indisponíveis: ${livrosIndisponiveis}`);
  console.log(`Total de páginas: ${totalPaginas}`);
  console.log(`Média de páginas: ${mediaPaginas.toFixed(2)}`);
}
