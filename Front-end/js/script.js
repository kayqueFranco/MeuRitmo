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
    event.preventDefault();

    const nome = document.getElementById("txtNome").value;
    const idade = parseInt(document.getElementById("txtIdade").value);
    const peso = parseFloat(document.getElementById("txtPeso").value);
    const altura = parseFloat(document.getElementById("txtAltura").value);
    const objetivo = document.getElementById("atividade").value;
    const sexo = pegarSexoSelecionado(); // ← agora sim!

    fetch("http://10.26.45.42:5000/api/v1/usuario/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome,
            idade,
            sexo,
            peso,
            altura,
            objetivo
        })
    })
        .then((res) => {
            if (!res.ok) throw new Error("Erro ao cadastrar usuário");
            return res.json();
        })
        .then((resposta) => {
            console.log("Usuário cadastrado:", resposta.insertId);
            localStorage.setItem("id_usuario", resposta.insertId);
            localStorage.setItem("nome", nome);
            localStorage.setItem("idade", idade);
            localStorage.setItem("sexo", sexo);
            localStorage.setItem("peso", peso);
            localStorage.setItem("objetivo", objetivo);
            window.location.href = "perguntas.html";
        })
        .catch((err) => {
            console.error("Erro:", err);
        });
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

// -------------------
// Formulário de hábitos (perguntas.html)
// -------------------
function coletarPerguntas() {
    const id_usuario = localStorage.getItem("id_usuario");

    if (!id_usuario) {
        alert("Usuário não encontrado. Faça o cadastro novamente.");
        return;
    }

    const agua = document.querySelector('input[name="agua"]:checked');
    const exercicio_semanal = document.querySelector('input[name="exercicios-dias"]:checked');
    const tempo_treino = document.querySelector('input[name="exercicios-duracao"]:checked');
    const sono = document.querySelector('input[name="dormir"]:checked');
    const atividade_diaria = document.querySelector('input[name="atividade"]:checked');
    const frutas_vegetais = document.querySelector('input[name="frutas"]:checked');
    const doces_fritura = document.querySelector('input[name="gordura"]:checked');
    const fuma_bebe = document.querySelector('input[name="fumar"]:checked');

    if (
        !agua || !exercicio_semanal || !tempo_treino || !sono ||
        !atividade_diaria || !frutas_vegetais || !doces_fritura || !fuma_bebe
    ) {
        alert("Por favor, responda todas as perguntas antes de continuar.");
        return;
    }

    alert(agua.value);

    fetch("http://10.26.45.42:5000/api/v1/resposta/cadastro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            id_usuario: parseInt(id_usuario),
            agua: agua.value,
            exercicio_semanal: exercicio_semanal.value,
            tempo_treino: tempo_treino.value,
            sono: sono.value,
            agua: parseInt(agua.value),
            exercicio_semanal: parseInt(exercicio_semanal.value),
            tempo_treino: parseInt(tempo_treino.value),
            sono: parseInt(sono.value),
            atividade_diaria: atividade_diaria.value,
            frutas_vegetais: frutas_vegetais.value,
            doces_fritura: doces_fritura.value,
            fuma_bebe: fuma_bebe.value
        })
    })
        .then(res => {
            if (!res.ok) throw new Error(`Erro ${res.status} ao salvar hábitos`);
            return res.json();
        })
        .then(data => {
            console.log("Respostas cadastradas:", data);
            window.location.href = "grafico.html";
        })
        .catch(err => {
            console.error("Falha ao enviar:", err);
        });
}

// Efeito scroll animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show');
        }
    });
})
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));