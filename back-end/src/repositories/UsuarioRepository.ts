import { resolve } from "path";
import Usuario from "../classes/Usuario";
import Commands from "../interfaces/commands";
import { rejects } from "assert";
import { conexao } from "../database/Config";
import { error } from "console";

export default class UsuarioRepository implements Commands<Usuario>{
    Cadastrar(obj: Usuario): Promise<Usuario> {
      return new Promise((resolve,rejects)=>{
    
        conexao.query("INSERT INTO usuario(nome,email,data_nascimento,telefone,senha) values(?,?,?,?,?)",
            [
                obj.nome,
                obj.email,
                obj.data_nascimento,
                obj.telefone,
                obj.senha],
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
    Listar(): Promise<Usuario[]> {
        return new Promise((resolve,rejects)=>{
            conexao.query("Select * from usuario",(erro,result)=>{
                if(erro){
                    return rejects(erro)
                }
                else{
                    return resolve(result as Usuario[])
                }
            })
        })
    }
    Apagar(id: number): Promise<String> {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: Usuario): Promise<Usuario> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Promise<Usuario> {
        throw new Error("Method not implemented.");
    }
    
}