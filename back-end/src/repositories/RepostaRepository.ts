import { resolve } from "path";
import Resposta from "../classes/Resposta";
import { conexao } from "../database/Config";
import Commands from "../interfaces/commands";

export default class RespostaRepository implements Commands<Resposta> {
    Cadastrar(obj: Resposta): Promise<Resposta> {

        return new Promise((resolve, reject) => {
            conexao.query("INSERT INTO resposta(id_usuario,agua,exercicio_semanal,tempo_treino,sono,atividade_diaria,frutas_vegetais,doces_fritura,fuma_bebe,pontuacao) Values (?,?,?,?,?,?,?,?,?,?)",
                [
                    obj.usuario,
                    obj.agua,
                    obj.exercicio_semanal,
                    obj.tempo_treino,
                    obj.sono,
                    obj.atividade_diaria,
                    obj.frutas_vegetais,
                    obj.doces_fritura,
                    obj.fuma_bebe,
                    obj.pontuacao
                ],
                (erro, result: any) => {
                    if (erro) {
                        return reject(erro);
                    }
                    else {
                        return resolve(obj);


                    }
                }
            )
        })
    }
    Listar(): Promise<Resposta[]> {
        return new Promise((resolve, reject) => {
            conexao.query("Select * from resposta", (erro, result) => {
                if (erro) {
                    return reject(erro)
                }
                else {
                    return resolve(result as Resposta[])
                }
            })
        })
    }
    Apagar(id: number): Promise<String> {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: Resposta): Promise<Resposta> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Promise<Resposta> {
        throw new Error("Method not implemented.");
    }



    CadastrarPreferencias(sexo: any, objetivo: any, peso: any, usuario: any, agua: any, exercicio_semanal: any, tempo_treino: any, sono: any, frutas_vegetais: any, frituras_doces: any, fuma_bebe: any): Promise<any> {
        let retorno_recomendado: any;
        let dados_resposta: any;
        console.log(sexo, objetivo, peso, usuario);
        let peso_grafico: any;
        let agua_grafico: any;
        let exercicio_semanal_grafico: any;
        let tempo_treino_grafico: any;
        let sono_grafico: any;
        let frutas_vegetais_grafico: any
        let frituras_doces_grafico: any;
        let fuma_bebe_grafico: any;
        let dados_grafico: any = [];
    
        let peso_cliente: number = peso;
    
        console.log(objetivo);
        console.log(agua)


        return new Promise((resolve, reject) => {
    
            if (peso <= 50)
                peso_cliente = 50;
            else if (peso <= 70)
                peso_cliente = 70;
            else if (peso <= 90)
                peso_cliente = 90;
            else
                peso_cliente = 120;
    
            // PRIMEIRA QUERY - dados_recomendados
            conexao.query(`SELECT * FROM dados_recomendados WHERE sexo = ? AND objetivo = ? AND peso = ?`,
                [sexo, objetivo, peso_cliente],
                (erro, result_recomendado) => {
                    if (erro) return reject(erro);
    
                    retorno_recomendado = result_recomendado;
                    console.log(retorno_recomendado);
    
                    // SEGUNDA QUERY - resposta do usuário
                    conexao.query(`SELECT usuario.id, usuario.nome, usuario.objetivo, usuario.peso, usuario.sexo,
                                        resposta.agua, resposta.exercicio_semanal, resposta.tempo_treino,
                                        resposta.sono, resposta.atividade_diaria, resposta.frutas_vegetais,
                                        resposta.doces_fritura, resposta.fuma_bebe
                                    FROM usuario 
                                    INNER JOIN resposta ON usuario.id = resposta.id_usuario 
                                    WHERE usuario.id = ?`,
                        [usuario],
                        (erro, result_resposta) => {
                            if (erro) return reject(erro);
    
                            dados_resposta = result_resposta;
                            console.log(dados_resposta);
    
                            if (dados_resposta[0].objetivo == "ganhar") {
                                if (parseInt(dados_resposta[0].peso) <= parseInt(retorno_recomendado[0].peso)) {
                                    peso_grafico = 100;
                                }
                    
                                agua_grafico = dados_resposta[0].agua && retorno_recomendado[0].agua
                                    ? (parseFloat(dados_resposta[0].agua) / parseFloat(retorno_recomendado[0].agua)) * 100
                                    : 0;
                    
                                exercicio_semanal_grafico = (parseFloat(dados_resposta[0].exercicio_semanal) / parseFloat(retorno_recomendado[0].exercicio_semanal)) * 100;
                                tempo_treino_grafico = (parseFloat(dados_resposta[0].tempo_treino) / parseFloat(retorno_recomendado[0].tempo_treino)) * 100;
                                sono_grafico = (parseFloat(dados_resposta[0].sono) / parseFloat(retorno_recomendado[0].sono)) * 100;
                                frutas_vegetais_grafico = retorno_recomendado[0].frutas_vegetais;
                                frituras_doces_grafico = retorno_recomendado[0].fritura_doces;
                                fuma_bebe_grafico = retorno_recomendado[0].fuma_bebe;
                    
                            } else if (dados_resposta[0].objetivo == "perder") {
                                if (dados_resposta[0].agua && retorno_recomendado[0].agua) {
                                    if (parseFloat(dados_resposta[0].agua) >= parseFloat(retorno_recomendado[0].agua)) {
                                        agua_grafico = 100;
                                    } else {
                                        agua_grafico = (parseFloat(dados_resposta[0].agua) / parseFloat(retorno_recomendado[0].agua)) * 100;
                                    }
                                } else {
                                    agua_grafico = 0;
                                }
                    
                                exercicio_semanal_grafico = (parseFloat(dados_resposta[0].exercicio_semanal) / parseFloat(retorno_recomendado[0].exercicio_semanal)) * 100;
                                tempo_treino_grafico = (parseFloat(dados_resposta[0].tempo_treino) / parseFloat(retorno_recomendado[0].tempo_treino)) * 100;
                                sono_grafico = (parseFloat(dados_resposta[0].sono) / parseFloat(retorno_recomendado[0].sono)) * 100;
                                frutas_vegetais_grafico = retorno_recomendado[0].frutas_vegetais;
                                frituras_doces_grafico = retorno_recomendado[0].fritura_doces;
                                fuma_bebe_grafico = retorno_recomendado[0].fuma_bebe;
                    
                            } else if (dados_resposta[0].objetivo == "manter") {
                                if (dados_resposta[0].agua && retorno_recomendado[0].agua) {
                                    if (parseFloat(dados_resposta[0].agua) == parseFloat(retorno_recomendado[0].agua)) {
                                        agua_grafico = 100;
                                    } else {
                                        agua_grafico = (parseFloat(dados_resposta[0].agua) / parseFloat(retorno_recomendado[0].agua)) * 100;
                                    }
                                } else {
                                    agua_grafico = 0;
                                }
                    
                                exercicio_semanal_grafico = (parseFloat(dados_resposta[0].exercicio_semanal) / parseFloat(retorno_recomendado[0].exercicio_semanal)) * 100;
                                tempo_treino_grafico = (parseFloat(dados_resposta[0].tempo_treino) / parseFloat(retorno_recomendado[0].tempo_treino)) * 100;
                                sono_grafico = (parseFloat(dados_resposta[0].sono) / parseFloat(retorno_recomendado[0].sono)) * 100;
                                frutas_vegetais_grafico = retorno_recomendado[0].frutas_vegetais;
                                frituras_doces_grafico = retorno_recomendado[0].fritura_doces;
                                fuma_bebe_grafico = retorno_recomendado[0].fuma_bebe;
                            }
    
                            dados_grafico.push(agua_grafico);
                            dados_grafico.push(exercicio_semanal_grafico);
                            dados_grafico.push(tempo_treino_grafico);
                            dados_grafico.push(sono_grafico);
                            dados_grafico.push(frutas_vegetais_grafico);
                            dados_grafico.push(frituras_doces_grafico);
                            dados_grafico.push(fuma_bebe_grafico);
    
                            return resolve(dados_grafico);
                        });
                });
        });
    }
    
}