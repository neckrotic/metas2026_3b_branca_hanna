const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        botoes.forEach(b => b.classList.remove("botao-ativo"));
        textos.forEach(t => t.classList.remove("conteudo-ativo"));

        botao.classList.add("botao-ativo");
        textos[indice].classList.add("conteudo-ativo");
    });
});

const tempos = [
    new Date("2026-11-01T00:00:00"),
    new Date("2026-12-18T00:00:00"),
    new Date("2026-12-20T00:00:00"),
    new Date("2027-02-01T00:00:00")
];

function atualizarCronometro() {

    tempos.forEach((data, i) => {

        const agora = new Date();
        const diferenca = data - agora;

        if (diferenca <= 0) {
            document.getElementById(`dias${i}`).textContent = "0";
            document.getElementById(`horas${i}`).textContent = "0";
            document.getElementById(`min${i}`).textContent = "0";
            document.getElementById(`seg${i}`).textContent = "0";
            return;
        }

        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
        const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
        const segundos = Math.floor((diferenca / 1000) % 60);

        document.getElementById(`dias${i}`).textContent = dias;
        document.getElementById(`horas${i}`).textContent = horas;
        document.getElementById(`min${i}`).textContent = minutos;
        document.getElementById(`seg${i}`).textContent = segundos;
    });
}

atualizarCronometro();
setInterval(atualizarCronometro, 1000);