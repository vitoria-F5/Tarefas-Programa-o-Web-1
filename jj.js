document.addEventListener("DOMContentLoaded", function () {
  inserirBotoesComInnerHTML();
  inserirBotaoJS();
});

function diminuir(fontSize) {
  h2 = document.querySelector("h2")
  h2.style.fontSize = "35px";
}
function aumentar(fontSize) {
  h2 = document.querySelector("h2")
  h2.style.fontSize = "40px";
}

function inserirBotaoJS() {
  div = document.createElement("div");
 
  div.appendChild(botao);
  document.body.prepend(div);
}

function inserirBotoesComInnerHTML() {
  div = document.createElement("div");
  div.style.backgroundColor = "cyan";
  div.innerHTML = `
  <button onclick="aumentar('fontSize')">+</button>
  <button onclick="diminuir('fontSize')">-</button>
  `;
  document.body.prepend(div);
}