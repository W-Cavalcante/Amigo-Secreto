const listaAmigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nome = inputAmigo.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    if (listaAmigos.includes(nome)) {
        alert("Esse nome já foi adicionado.");
        return;
    }

    listaAmigos.push(nome);
    atualizarLista();
    inputAmigo.value = "";
}

function atualizarLista() {
    const ulListaAmigos = document.getElementById("listaAmigos");
    ulListaAmigos.innerHTML = "";
    
    listaAmigos.forEach((nome, index) => {
        const li = document.createElement("li");
        li.textContent = nome;
        ulListaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }
    
    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    const nomeSorteado = listaAmigos[indiceSorteado];
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> Amigo sorteado: <strong>${nomeSorteado}</strong>!</li>`;
}
