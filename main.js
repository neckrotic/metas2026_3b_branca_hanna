const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

// ===== ABAS =====
for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("botao-ativo");
            textos[j].classList.remove("aba-conteudo-ativo");
        }

        botoes[i].classList.add("botao-ativo");
        textos[i].classList.add("aba-conteudo-ativo");
    };
}

// ===== CONTADOR =====
const tempoObjetivo1 = new Date("2026-11-01T00:00:00");
const tempoObjetivo2 = new Date("2026-12-18T00:00:00");
const tempoObjetivo3 = new Date("2026-12-20T00:00:00");
const tempoObjetivo4 = new Date("2027-02-01T00:00:00");

const tempos = [
    tempoObjetivo1,
    tempoObjetivo2,
    tempoObjetivo3,
    tempoObjetivo4
];

function atualizaCronometro() {
    for (let i = 0; i < tempos.length; i++) {

        let tempoAtual = new Date();
        let tempoFinal = tempos[i] - tempoAtual;

        let segundos = Math.floor(tempoFinal / 1000);
        let minutos = Math.floor(segundos / 60);
        let horas = Math.floor(minutos / 60);
        let dias = Math.floor(horas / 24);

        segundos %= 60;
        minutos %= 60;
        horas %= 24;

        if (tempoFinal > 0) {
            document.getElementById(`dias${i}`).textContent = dias;
            document.getElementById(`horas${i}`).textContent = horas;
            document.getElementById(`min${i}`).textContent = minutos;
            document.getElementById(`seg${i}`).textContent = segundos;
        } else {
            document.getElementById(`dias${i}`).textContent = "0";
            document.getElementById(`horas${i}`).textContent = "0";
            document.getElementById(`min${i}`).textContent = "0";
            document.getElementById(`seg${i}`).textContent = "0";
        }
    }
}

function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

comecaCronometro();