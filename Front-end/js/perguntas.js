document.querySelector('form[name="frmHealth"]').addEventListener('submit', function (event) {
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

    if (!agua || !exerciciosDias || !exerciciosDuracao || !dormir || !atividade || !frutas || !gordura || !fumar) {
        alert('Por favor, responda todas as perguntas!');
        return;
    }

    function pontuarResposta(pergunta, resposta) {
        const tabela = {
            perder_peso: {
                agua: {
                    "Menos de 1 litro": 0,
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

    // Pontuações individuais
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

    // Salva no localStorage
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
