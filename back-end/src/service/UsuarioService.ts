import usuario from "../classes/Usuario";
import usuarioRepository from "../repositories/UsuarioRepository";
import { Request, Response } from "express";


export default class usuarioService{
    usuRepository = new usuarioRepository();

    async cadastroUsuario(req:Request,res:Response){
        const usu: usuario = new usuario();
        
        usu.nome = req.body.nome;
        usu.idade = req.body.idade;
        usu.peso = req.body.peso;
        usu.objetivo = req.body.objetivo;
        usu.altura = req.body.altura;
        usu.sexo = req.body.altura;

        try {
            const rs = await this.usuRepository.Cadastrar(usu)
            return res.status(201).json(rs)
        } catch (error) {
            return res.status(500).json(error)
        }
    
    
    }




    async listarUsuario(req:Request,res:Response){
        try {
            const rs = await this.usuRepository.Listar();
            return res.status(200).json(rs)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}