import { rejects } from "assert";
import InfoPessoais from "../classes/InfoPessoais";
import Commands from "../interfaces/commands";
import { conexao } from "../database/Config";
import { resolve } from "path";
import { error } from "console";

export default class InfoPessoaisRepository implements Commands<InfoPessoais>{
    Cadastrar(obj: InfoPessoais): Promise<InfoPessoais> {
        return new Promise((resolve, rejects)=>{

            conexao.query("INSERT INTO cadinfo(id_usuario,sexo,peso,altura,objetivo,nivel_atividade_fisica) values (?,?,?,?,?,?)",
                [
                    obj.usuario,
                    obj.sexo,
                    obj.peso,
                    obj.altura,
                    obj.objetivo,
                    obj.nivel_atividade_fisica
                ],
                (error,result)=>{
                    if(error){
                        return rejects(error)
                    }         
                    else{
                        return resolve(obj)
                    } 
                }
            )
        })
    }
    Listar(): Promise<InfoPessoais[]> {
       return new Promise((resolve,rejects)=>{
        conexao.query("Select * from cadinfo", (erro, result)=>{
            if(erro){
                return rejects(erro)
            }
            else{
                return resolve(result as InfoPessoais[])
            }
        })
       })
    }
    Apagar(id: number): Promise<String> {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: InfoPessoais): Promise<InfoPessoais> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Promise<InfoPessoais> {
        throw new Error("Method not implemented.");
    }

}