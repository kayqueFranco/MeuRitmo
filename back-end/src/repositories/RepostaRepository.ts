import { resolve } from "path";
import Resposta from "../classes/Resposta";
import { conexao } from "../database/Config";
import Commands from "../interfaces/commands";

export default class RespostaRepository implements Commands<Resposta>{
    Cadastrar(obj: Resposta): Promise<Resposta> {
       
        return new Promise((resolve,reject)=>{
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
                    obj.pontacao
                ],
                    (erro,result:any)=>{
                        if(erro){
                            return reject(erro);
                        }
                        else{
                            return resolve(obj);
                        }
                    }
            )
        })
    }
    Listar(): Promise<Resposta[]> {
        return new Promise((resolve,reject)=>{
            conexao.query("Select * from resposta", (erro, result)=>{
                if(erro){
                    return reject(erro)
                }
                else{
                    return resolve (result as Resposta[])
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

}