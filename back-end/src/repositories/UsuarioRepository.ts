import { rejects } from "assert";
import Resposta from "../classes/Resposta";
import Usuario from "../classes/Usuario";
import { conexao } from "../database/Config";
import Commands from "../interfaces/commands";
import CommandsUsuaro from "../interfaces/CommandsUsuario";


export default class UsuarioRepository implements CommandsUsuaro<Usuario>{
    login(usuario: string, senha: string) {
        throw new Error("Method not implemented.");
    }
    loginUCE(usuario: string, emiail: string, senha: string) {
        throw new Error("Method not implemented.");
    }
    Cadastrar(obj: Usuario): Promise<Usuario> {
        throw new Error("Method not implemented.");
    }
    Listar(): Promise<Usuario[]> {
        return new Promise ((resolve, reject)=>{
            conexao.query("Select * from usuario", (erro, result)=>{
                if(erro){
                    return reject(erro)
                }
                else {
                    return resolve (result as Usuario[])
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