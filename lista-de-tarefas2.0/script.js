const add = document.getElementById("add")
const ul = document.querySelector("ul")
const texto = document.querySelector("#texto")
const aviso = document.getElementById("aviso")

const tema = document.getElementById("tema")
const listTarefas = document.querySelector(".lista-tarefas")
const container = document.querySelector(".container")

let avs = false;

add.addEventListener("click", addTarefa)
tema.addEventListener("click", mudarTema)

function addTarefa() {
    if(texto.value !== "") {
        let li = document.createElement("li")
        ul.appendChild(li)

        let tarefa = document.createElement("span")
        tarefa.textContent = texto.value;
        li.appendChild(tarefa)

        let feito = document.createElement("button")
        feito.className = "feito";
        feito.textContent = "V";
        li.appendChild(feito)
        feito.addEventListener("click", tarefaFeita)

        let excluir = document.createElement("button")
        excluir.className = "excluir";
        excluir.textContent = "X";
        li.appendChild(excluir)
        excluir.addEventListener("click", excluirTarefa)

        texto.value = "";
        aviso.style.display = "none";
        avs = false;

        function tarefaFeita() {
            tarefa.classList.toggle("tarefa-feita")
        }

        function excluirTarefa() {
            ul.removeChild(li)
        }

    } else if(avs === false) {
        aviso.style.display = "inline-block";
        avs = true;
    }
}

let temaEscuro = false;

function mudarTema() {
    listTarefas.classList.toggle("tema-escuro")
    container.classList.toggle("fundo-escuro")
    if(temaEscuro === false) {
        tema.textContent = "Tema: Escuro";
        temaEscuro = true;
    } else if(temaEscuro !== false) {
        tema.textContent = "Tema: Claro"
        temaEscuro = false;
    }
}