import Usuario from "../classes/Usuario";
import UsuarioRepository from "../repositories/UsuarioRepository";
import { Request, Response } from 'express';
import bcrypt from "bcrypt";
import { sign,verify } from "jsonwebtoken";



export default class UsuarioService{
    usuRepository = new UsuarioRepository()



async criptografarSenha(senha:string){
    let rs= await bcrypt.hash(senha,12);
    return rs;
}


async cadastroUsuario(req:Request,res:Response){
    const usu:Usuario = new Usuario()
    usu.nome = req.body.nome;
    usu.email = req.body.email;
    usu.data_nascimento = req.body.data_nascimento;
    usu.telefone = req.body.telefone;
    usu.senha =(await this.criptografarSenha(req.body.senha)).toString();
    usu.nomeusuario = req.body.nomeusuario;
    try {
        const rs = await this.usuRepository.Cadastrar(usu);
        return res.status(201).json(rs)
    } catch (error) {
        return res.status(500).json(error)
    }   
}


async loginUsuario(req:Request, res:Response){
    let us = req.body.usuario;
    let sh = req.body.senha;
    try{
        const rs = await this.usuRepository.login(us,sh);

        if(rs ==null){
            return res.status(401).json({msg:`Usuário ou senha inválidos`})
        }
        bcrypt.compare(sh,rs[0].senha,(erro,igual)=>{
            if(!igual){
                return res.status(401).json({msg:`Usuário ou senha inválidos`});
            }
            let usuario={
            id:rs[0].id,
                nomeusuario:rs[0].nomeusuario,
            }

            const token = sign(usuario,"P@$$w0rd",{expiresIn:"2d"})

            return res.status(200).json({msg:`Logado`,payload:usuario,token:token})

        })
    }
    catch(error){
        return res.status(500).json({msg:`Erro ao tentar logar ${error}`})
    }
}

    async listarUsuarios(req: Request, res:Response){
        try {
            const rs = await this.usuRepository.Listar()
            return res.status(200).json(rs);
        } catch (error) {
            return res.status(500).json(error)
            
        }
    }
}