
document.querySelector("button").addEventListener("click", () => {
    const nomeTarefa = document.getElementById("nomeTarefa");

    if(nomeTarefa.value === ""){
        alert("O nome da tarefa não pode ser vazio");
        return
    }

    if(nomeTarefa.value.length < 3){
        alert("O nome da tarefa esta muito curto");
        return
    }

    const item = document.createElement("li");
    item.textContent = nomeTarefa.value;

    const btnConcluir = document.createElement("button");
    btnConcluir.textContent = "Concluir";
    btnConcluir.addEventListener("click",()=>{
        item.classList.toggle("concluido");
    })

    const btnExluir = document.createElement("button");
    btnExluir.textContent = "Excluir";
    btnExluir.addEventListener("click", ()=> {
        item.remove();
    })

    item.appendChild(btnConcluir);
    item.appendChild(btnExluir);

    document.getElementById("tarefas").appendChild(item);
    nomeTarefa.value = "";
});