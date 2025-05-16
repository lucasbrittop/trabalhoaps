const hoje = new Date();
const dataFormatada = hoje.toLocaleDateString('pt-BR');
document.getElementById("data-hoje").textContent = dataFormatada;


const nomeVisitante = prompt("Qual é o seu nome?");


if (nomeVisitante) {
  const mensagem = `Seja bem-vindo(a), ${nomeVisitante}!`;
  document.getElementById("boas-vindas").textContent = mensagem;
}