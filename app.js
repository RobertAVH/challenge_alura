// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo() {
    nombre = document.getElementById('amigo').value
    if (nombre == "") {
        alert('Debe ingresar un nombre')
        return
    } else {
        amigos.push(nombre)
        document.getElementById('amigo').value = ""
        mostrarAmigos()
        console.log(amigos)
    }
}

function mostrarAmigos() {
    document.getElementById('listaAmigos').innerHTML = "<li></li>"
    for (let i = 0; i < amigos.length; i++) {
        document.getElementById('listaAmigos').innerHTML += '<li>'+ amigos[i] + '</li>'
    }
}

function sortearAmigo() {
    document.getElementById('listaAmigos').innerHTML = "<li></li>"
    let random = Math.floor(Math.random() * amigos.length)
    document.getElementById('resultado').innerHTML = amigos[random]
}