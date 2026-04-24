const form = document.getElementById("formFilme");
const erro = document.getElementById("erro");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const nota = Number(document.getElementById("nota").value);

  if (nome === "" || nota < 1 || nota > 5 || isNaN(nota)) {
    erro.textContent = "⚠️ Preencha todos os campos corretamente!";
    erro.className = "erro";
    return;
  }

  let filmes = JSON.parse(localStorage.getItem("filmes")) || [];

  filmes.push({ nome, nota });

  localStorage.setItem("filmes", JSON.stringify(filmes));

  erro.textContent = "✅ Filme cadastrado!";
  erro.className = "sucesso";

  form.reset();
});