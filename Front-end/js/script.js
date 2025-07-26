let menuIcon = document.querySelector('#menu-icon');
let ul = document.querySelector('.nav-list');
let ip = "http://10.26.45.42:5000/api/v1";

menuIcon.addEventListener('click', () => {
    if (ul.classList.contains('ativo')) {
        ul.classList.remove('ativo');
        document.querySelector('#menu-icon img').src = 'img/burger-bar.png'
    } else {
        ul.classList.add('ativo');
        document.querySelector('#menu-icon img').src = 'img/close.png';
    }
})

//-- Pegando dados do HTML 

function coletarDados(event) {
    event.preventDefault(); // Impede o reload da página
    const nome = document.getElementById('txtNome').value;
    const idade = document.getElementById('txtIdade').value;
    const peso = document.getElementById('txtPeso').value;
    const altura = document.getElementById('txtAltura').value;
    const objetivo = document.getElementById('atividade').value;
    const sexo = pegarSexoSelecionado();

    console.log("Nome:", nome);
    console.log("Idade:", idade);
    console.log("Peso:", peso);
    console.log("Objetivo:", objetivo);
    console.log("Sexo:", sexo);

    localStorage.setItem("nome", nome);
    localStorage.setItem("idade", idade);
    localStorage.setItem("peso", peso);
    localStorage.setItem("altura", altura);
    localStorage.setItem("objetivo", objetivo);
    localStorage.setItem("sexo", sexo);

    // Redireciona para a próxima página
    window.location.href = "perguntas.html";
}

function pegarSexoSelecionado() {
    const sexo = document.querySelector('input[name="grupo"]:checked');

    if (sexo) {
        console.log("Sexo selecionado:", sexo.value); // masculino ou feminino
        return sexo.value;
    } else {
        console.log("Nenhum sexo selecionado");
        return null;
    }
}



