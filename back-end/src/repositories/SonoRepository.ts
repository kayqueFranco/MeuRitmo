import Commands from "../interfaces/commands";
import Sono from "../classes/Sono";
import { rejects } from "assert";
import { conexao } from "../database/Config";

export default class SonoRepository implements Commands<Sono>{
    Cadastrar(obj: Sono): Promise<Sono> {
        return new Promise((resolve,rejects)=>{

        
        conexao.query("INSERT INTO sono(id_usuario,hora_durmidas,qualidade_sono,hora_dormiu,hora_acordou,datadia) values (?,?,?,?,?,?)",
            [
                obj.usuario,
                obj.horas_durmidas,
                obj.qualidade_sono,
                obj.hora_dormiu,
                obj.hora_acordou,
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

    Listar(): Promise<Sono[]> {
        return new Promise((resolve,rejects)=>{
            conexao.query("Select * from sono",(erro, result)=>{
                if(erro){
                    return rejects(erro)
                }
                else{
                    return resolve(result as Sono[])
                }
            })
        })
    }
    Apagar(id: number): Promise<String> {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: Sono): Promise<Sono> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Promise<Sono> {
        throw new Error("Method not implemented.");
    }
    
}