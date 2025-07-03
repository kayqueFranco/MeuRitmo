import Alimentacao from "../classes/Alimentacao";
import Commands from "../interfaces/commands";
import { conexao } from "../database/Config";
import { rejects } from "assert";
import { error } from "console";


export default class AlimentacaoRepository implements Commands<Alimentacao> {
    Cadastrar(obj: Alimentacao): Promise<Alimentacao> {
        return new Promise((resolve, rejects) => {
            conexao.query("INSERT INTO alimentacao(id_usuario,refeicao,oque_comeu,quantidade_comeu,hora,datadia) values (?,?,?,?,?,?)",
                [
                    obj.usuario,
                    obj.refeicao,
                    obj.oque_comeu,
                    obj.quantidade_comeu,
                    obj.hora,
                    obj.datadia
                ],
                (error, result) => {
                    if (error) {
                        return rejects(error)
                    }
                    else {
                        return resolve(obj)
                    }
                }
            )
        })
    }
    Listar(): Promise<Alimentacao[]> {
        return new Promise((resolve, rejects) => {
            conexao.query("Select * from alimentacao", (erro, result) => {
                if (erro) {
                    return rejects(erro)
                }
                else {
                    return resolve(result as Alimentacao[])
                }
            })
        })

    }
    Apagar(id: number): Promise<String> {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: Alimentacao): Promise<Alimentacao> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Promise<Alimentacao> {
        throw new Error("Method not implemented.");
    }
}