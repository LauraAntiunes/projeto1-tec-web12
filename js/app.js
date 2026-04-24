let series = JSON.parse(localStorage.getItem("series")) || [];

function salvar() {
  localStorage.setItem("series", JSON.stringify(series));
}