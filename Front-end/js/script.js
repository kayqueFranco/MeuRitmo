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
            console.log("Usuário cadastrado:", resposta);
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
const formHabitos = document.querySelector('form[name="frmHealth"]');
if (formHabitos) {
    formHabitos.addEventListener('submit', function (event) {
        event.preventDefault();

        const objetivo = localStorage.getItem('objetivo');
        console.log('Objetivo:', objetivo);

        function pegarResposta(name) {
            const resp = document.querySelector(`input[name="${name}"]:checked`);
            return resp ? resp.value : null;
        }

        const agua = pegarResposta('agua');
        const exerciciosDias = pegarResposta('exercicios-dias');
        const exerciciosDuracao = pegarResposta('exercicios-duracao');
        const dormir = pegarResposta('dormir');
        const atividade = pegarResposta('atividade');
        const frutas = pegarResposta('frutas');
        const gordura = pegarResposta('gordura');
        const fumar = pegarResposta('fumar');

        const pontuacoesIndividuais = {
            agua: pontuarResposta('agua', agua),
            exerciciosDias: pontuarResposta('exercicios-dias', exerciciosDias),
            exerciciosDuracao: pontuarResposta('exercicios-duracao', exerciciosDuracao),
            dormir: pontuarResposta('dormir', dormir),
            atividade: pontuarResposta('atividade', atividade),
            frutas: pontuarResposta('frutas', frutas),
            gordura: pontuarResposta('gordura', gordura),
            fumar: pontuarResposta('fumar', fumar)
        };

        const pontuacaoTotal = Object.values(pontuacoesIndividuais).reduce((acc, val) => acc + val, 0);

        localStorage.setItem('pontuacaoTotal', pontuacaoTotal);
        localStorage.setItem('pontuacoesIndividuais', JSON.stringify(pontuacoesIndividuais));
        localStorage.setItem('respostasHabitos', JSON.stringify({
            agua,
            exerciciosDias,
            exerciciosDuracao,
            dormir,
            atividade,
            frutas,
            gordura,
            fumar
        }));

        // ✅ Aqui inicia o envio ao backend
        fetch("http://10.26.45.42:5000/api/v1/resposta/cadastro", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id_usuario,
                agua,
                exercicio_semanal,
                tempo_treino,
                sono,
                atividade_diaria,
                frutas_vegetais,
                doces_fritura,
                fuma_bebe,
                pontuacao
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