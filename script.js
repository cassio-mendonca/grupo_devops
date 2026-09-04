const btn = document.querySelectorAll("button");
const form = document.querySelector("#formContato");
const resposta = document.querySelector("#resposta");
const servicos = document.querySelector("#servicos");

btn.forEach(b => {
    b.onmouseover = () => b.style.background = "#57665F";
    b.onmouseout = () => b.style.background = "";
});

document.querySelector("#botaoDestaque").onclick = () => {
    servicos.scrollIntoView({ behavior: "smooth" });
};

form.onsubmit = e => {
    e.preventDefault();

    const nome = document.querySelector("#nome").value.trim();
    const mensagem = document.querySelector("#mensagem").value.trim();

    if (!nome || !mensagem) {
        resposta.textContent = "Preencha todos os campos!";
        resposta.style.color = "red";
    } else {
        resposta.textContent = `Obrigado pelo contato, ${nome}!`;
        resposta.style.color = "green";
    }
};
