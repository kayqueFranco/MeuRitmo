import { resolve } from "path";
import { Hidratacao } from "../classes/hidratacao";
import { conexao } from "../database/Config";
import Commands from "../interfaces/commands";
import { rejects } from "assert";

export default class HidratacaoRepository implements Commands<Hidratacao>{
    Cadastrar(obj: Hidratacao): Promise<Hidratacao> {
        return new Promise((resolve,rejects)=>{
            conexao.query("INSERT INTO hidratacao(id_usuario, quantidade_agua_ml, datadia) values (?,?,?) ",
                [
                obj.usuario,
                obj.quantidade_agua_ml,
                obj.datadia
                ],
                (erro,result)=>{
                    if(erro){
                        return rejects(erro)
                    }
                    else{
                        return resolve(obj)
                    }
                }
            )

        })
    }
    Listar(): Promise<Hidratacao[]> {
        return new Promise((resolve,rejects)=>{
            conexao.query("Select * from  hidratacao", (erro, result)=>{
                if(erro){
                    return rejects(erro)
                }
                else{
                    return resolve(result as Hidratacao[])
                }
            })
           })
    }
    Apagar(id: number): Promise<String> {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: Hidratacao): Promise<Hidratacao> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Promise<Hidratacao> {
        throw new Error("Method not implemented.");
    }

}