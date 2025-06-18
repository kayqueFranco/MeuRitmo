import { rejects } from "assert";
import Exercicio from "../classes/Exercicio";
import Commands from "../interfaces/commands";
import { conexao } from "../database/Config";

export default class ExercicioRepository implements Commands<Exercicio>{
    Cadastrar(obj: Exercicio): Promise<Exercicio> {
        return new Promise((resolve,rejects)=>{

            conexao.query("INSERT INTO exercicio(id_usuario,tipo_exercicio, duracao_min, intensidade, datadia) values(?,?,?,?,?)",
                [
                    obj.usuario,
                    obj.tipo_exercicio,
                    obj.duracao_min,
                    obj.intensidade,
                    obj.datadia
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
    Listar(): Promise<Exercicio[]> {
        return new Promise((resolve,rejects)=>{
            conexao.query("Select * from exercicio", (erro, result)=>{
                if(erro){
                    return rejects(erro)
                }
                else{
                    return resolve (result as Exercicio[])
                }
            })
        })
    }
    Apagar(id: number): Promise<String> {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: Exercicio): Promise<Exercicio> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Promise<Exercicio> {
        throw new Error("Method not implemented.");
    }
    
}
