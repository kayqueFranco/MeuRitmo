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

        function pontuarResposta(pergunta, resposta) {
            const tabela = {
                perder_peso: {
                    agua: {
                        "Menos de 1 litro": 5,
                        "1 - 2 litros": 10,
                        "2 - 3 litros": 15,
                        "Mais 3 litros": 20
                    },
                    "exercicios-dias": {
                        "1 - 2 dias": 5,
                        "3 - 5 dias": 10,
                        "5 - 7 dias": 15
                    },
                    "exercicios-duracao": {
                        "Menos de 30 minutos": 5,
                        "30 a 60 minutos": 10,
                        "Mais de 1 hora": 15
                    },
                    dormir: {
                        "Menos de 5hr": 5,
                        "5 - 7h": 10,
                        "7 - 8h": 15,
                        "Mais de 8h": 10
                    },
                    atividade: {
                        "Sedentario": 0,
                        "Moderado": 5,
                        "Ativo": 10
                    },
                    frutas: {
                        "Nunca": 0,
                        "As vezes": 5,
                        "Sempre": 10
                    },
                    gordura: {
                        "Sim, todos os dias": 0,
                        "As vezes": 5,
                        "Raramente": 10
                    },
                    fumar: {
                        "Sim": 0,
                        "Raramente": 5,
                        "Não": 10
                    }
                },
                ganhar_massa: {
                    agua: {
                        "Menos de 1 litro": 0,
                        "1 - 2 litros": 5,
                        "2 - 3 litros": 10,
                        "Mais 3 litros": 15
                    },
                    "exercicios-dias": {
                        "1 - 2 dias": 0,
                        "3 - 5 dias": 5,
                        "5 - 7 dias": 15
                    },
                    "exercicios-duracao": {
                        "Menos de 30 minutos": 0,
                        "30 a 60 minutos": 5,
                        "Mais de 1 hora": 15
                    },
                    dormir: {
                        "Menos de 5hr": 0,
                        "5 - 7h": 5,
                        "7 - 8h": 15,
                        "Mais de 8h": 10
                    },
                    atividade: {
                        "Sedentario": 0,
                        "Moderado": 5,
                        "Ativo": 10
                    },
                    frutas: {
                        "Nunca": 0,
                        "As vezes": 5,
                        "Sempre": 10
                    },
                    gordura: {
                        "Sim, todos os dias": 10,
                        "As vezes": 5,
                        "Raramente": 0
                    },
                    fumar: {
                        "Sim": 0,
                        "Raramente": 5,
                        "Não": 10
                    }
                },
                manter_peso: {
                    agua: {
                        "Menos de 1 litro": 0,
                        "1 - 2 litros": 10,
                        "2 - 3 litros": 12,
                        "Mais 3 litros": 15
                    },
                    "exercicios-dias": {
                        "1 - 2 dias": 5,
                        "3 - 5 dias": 10,
                        "5 - 7 dias": 12
                    },
                    "exercicios-duracao": {
                        "Menos de 30 minutos": 5,
                        "30 a 60 minutos": 10,
                        "Mais de 1 hora": 12
                    },
                    dormir: {
                        "Menos de 5hr": 5,
                        "5 - 7h": 10,
                        "7 - 8h": 12,
                        "Mais de 8h": 10
                    },
                    atividade: {
                        "Sedentario": 0,
                        "Moderado": 5,
                        "Ativo": 10
                    },
                    frutas: {
                        "Nunca": 0,
                        "As vezes": 5,
                        "Sempre": 10
                    },
                    gordura: {
                        "Sim, todos os dias": 0,
                        "As vezes": 5,
                        "Raramente": 10
                    },
                    fumar: {
                        "Sim": 0,
                        "Raramente": 5,
                        "Não": 10
                    }
                }
            };

            return tabela[objetivo]?.[pergunta]?.[resposta] || 0;
        }

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

        window.location.href = "grafico.html";
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