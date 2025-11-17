const texto = document.querySelector("#texto");
const btn = document.querySelector("#add-btn");
const lista = document.querySelector("#lista");
const ltarefas = document.querySelector(".lista-tarefas");
const p = document.querySelector("#aviso");

let avisado = false;

btn.addEventListener("click", addList);

function addList() {
    if(texto.value !== "") {
        let tarefa = document.createElement("li");
        lista.appendChild(tarefa);
        tarefa.textContent = texto.value;

        let remover = document.createElement("button");
        tarefa.appendChild(remover);
        remover.textContent = "—";

        texto.value = "";
        p.style.display = "none";
        avisado = false;

        remover.addEventListener("click", removeList)

        function removeList() {
            lista.removeChild(tarefa);
            tarefa.removeChild(remover);
        }

    } else if(avisado === false){
        p.style.display = "block";
        avisado = true;
    }
}
