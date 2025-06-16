import { resolve } from "path";
import Meta from "../classes/Meta";
import Commands from "../interfaces/commands";
import { rejects } from "assert";
import { conexao } from "../database/Config";
import { error } from "console";

export default class MetaRepository implements Commands<Meta>{
    Cadastrar(obj: Meta): Promise<Meta> {
        return new Promise((resolve,rejects)=>{

            conexao.query("INSERT INTO meta(id_usuario,meta_tipo,unidades,data_inicio,data_fim,valor_meta,ativo,ultima_atualizacao) values(?,?,?,?,?,?,?,?)",
                [
                    obj.usuario,
                    obj.meta_tipo,
                    obj.unidades,
                    obj.data_inicio,
                    obj.data_fim,
                    obj.valor_meta,
                    obj.ativo,
                    obj.ultima_atualizacao
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
    Listar(): Promise<Meta[]> {
       return new Promise((resolve,rejects)=>{
        conexao.query("Select * from meta",(erro, result)=>{
            if(erro){
            return rejects(erro)
            }
            else{
            return resolve(result as Meta[])
            }
        })
       })
    }
    Apagar(id: number): Promise<String> {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: Meta): Promise<Meta> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Promise<Meta> {
        throw new Error("Method not implemented.");
    }

}