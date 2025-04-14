const baseURL = " https://todos-production-34e1.up.railway.app/"

async function criarTarefa(nomeTarefa) {
    try {
        const resposta = await fetch(`${baseURL}/tarefas`, {
            method: 'POST',
            headers: {
                'Content-Type': 'aplication/json'
            },
            body: JSON.stringify({
                titulo: nomeTarefa,
                concluida: false
            })
        })
        if(!resposta.ok){
            alert(resposta.status)
        }
    } catch (error) {
        console.log(error)
    }
}

async function pegarTarefa() {
    try {
        const resposta = await(`${baseURL}/tarefas`)
        if(!resposta.ok) {
            alert(resposta.status)
        }
    } catch (error) {
        console.log(error)
    }
}

async function atualizarTodos() {
    const lista = document.querySelector('ul')
    lista.innerHTML = ""

    const dados = await pegarTarefa()
    dados.map((tarefas) =>{
        const li = document.querySelector('li')
        li.textContent = tarefas.titulo
        lista.appendChild(li)
    })
}

document.querySelector('button').addEventListener('click', async ()=>{
    const imput = document.querySelector('input')
    const nomeTarefa = input.value
    await criarTarefa(nomeTarefa)
    atualizarTarefa()
    input.value = ""
})