import UsuarioRepository from "../repositories/UsuarioRepository";
import { Request, Response } from "express";




export default class UsuarioService{
    usuRepository = new UsuarioRepository();
    

    async listarUsuario(req:Request, res:Response){
        try{
            const rs = await this.usuRepository.Listar()
        }
        catch(erro){
            return res.status(500).json(erro)
        }
    }
}