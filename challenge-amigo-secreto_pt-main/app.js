//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = []

function adicionarAmigo() {
    const campoTexto = document.getElementById('amigo')
    const nomeAmigo = campoTexto.value.trim()

    if(!nomeAmigo == "") {
        listaDeAmigos.push(nomeAmigo)
        listaAmigos.innerHTML = nomeAmigo
        console.log(listaDeAmigos)
    } else {
        alert("adicione um nome valido")
        return
    }
    campoTexto.value = ''
    atualizaListaAmigos()
}

function atualizaListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos')
    listaAmigos.innerHTML = ''

    for (let amigo of listaDeAmigos) {
        let itemLista = document.createElement('li')
        itemLista.innerHTML = amigo
        listaAmigos.appendChild(itemLista)
    }
}

function sortearAmigo() {
    let resultado = document.getElementById('resultado')

    if(listaDeAmigos.length > 1) {
        let amigoSorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)]

        resultado.innerHTML = `O amigo sorteado e : ${amigoSorteado}`
    }
    else {
        alert("adicione pelo menos mais amigos")
    }
    listaAmigos.innerHTML = ''
}
