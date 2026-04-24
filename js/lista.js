const lista = document.getElementById("listaFilmes");

let filmes = JSON.parse(localStorage.getItem("filmes")) || [];

if (filmes.length === 0) {
  lista.innerHTML = "<p>Nenhum filme cadastrado.</p>";
} else {
  filmes.forEach((filme, index) => {
    const item = document.createElement("article");

    item.innerHTML = `
      <strong>${filme.nome}</strong>
      <span>${"⭐".repeat(filme.nota)}</span>
      <button onclick="removerFilme(${index})">Remover</button>
    `;

    lista.appendChild(item);
  });
}

function removerFilme(index) {
  let filmes = JSON.parse(localStorage.getItem("filmes")) || [];
  filmes.splice(index, 1);
  localStorage.setItem("filmes", JSON.stringify(filmes));
  location.reload();
}