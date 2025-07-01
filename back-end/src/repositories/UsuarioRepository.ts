import { resolve } from "path";
import Usuario from "../classes/Usuario";
import bcrypt from "bcrypt"
import { rejects } from "assert";
import { conexao } from "../database/Config";
import { error } from "console";
import CommandsUsuaro from "../interfaces/CommandsUsuario";

export default class UsuarioRepository implements CommandsUsuaro<Usuario>{
    login(usuario: string, senha: string):Promise<any> {
        return new Promise((resolve, reject)=>{
            conexao.query(`SELECT * from usuario WHERE  nomeusuario=?`,
                [
                    usuario
                ],
                (erro,result:any)=>{
                    if(erro){
                        return reject(erro)
                    }
                    else{
                        return resolve(result)
                    }
                }
            )
        })
    }
    loginUCE(usuario: string, emiail: string, senha: string) {
        throw new Error("Method not implemented.");
    }
    Cadastrar(obj: Usuario): Promise<Usuario> {
      return new Promise((resolve,rejects)=>{
    
        conexao.query("INSERT INTO usuario(nome,email,data_nascimento,telefone,senha,nomeusuario) values(?,?,?,?,?,?)",
            [
                obj.nome,
                obj.email,
                obj.data_nascimento,
                obj.telefone,
                obj.senha,
                obj.nomeusuario],
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