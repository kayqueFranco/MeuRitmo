import { resolve } from "path";
import usuario from "../classes/Usuario";
import { conexao } from "../database/Config";
import Commands from "../interfaces/commands";

export default class usuarioRepository implements Commands<usuario>{
    Cadastrar(obj: usuario): Promise<usuario> {
        return new Promise((resolve,reject)=>{
            conexao.query("INSERT INTO usuario(nome,idade,peso,objetivo,altura,sexo) values(?,?,?,?,?,?)",
                [
                    obj.nome,
                    obj.idade,
                    obj.peso,
                    obj.objetivo,
                    obj.altura,
                    obj.sexo
                ],
                (erro, end:any)=>{
                    if(erro){
                    return reject(erro);
                    
                    }
                    else{
                        return resolve(obj)
                    }
                }
            )
        })
    }
    Listar(): Promise<usuario[]> {
        return new Promise((resolve,reject)=>{
            conexao.query("Select * from usuario", (erro, result)=>{
                if(erro){
                    return reject(erro)
                }
                else{
                    return resolve (result as usuario[])
                }
            })
        })
    }
    Apagar(id: number): Promise<String> {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: usuario): Promise<usuario> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Promise<usuario> {
        throw new Error("Method not implemented.");
    }
    
}