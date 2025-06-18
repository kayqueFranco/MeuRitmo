import InfoPessoais from "../classes/InfoPessoais";
import InfoPessoaisRepository from "../repositories/InfoPessoaisRepository";
import { Request, Response } from "express";

export default class InfoPessoaisService{
    infRepository = new InfoPessoaisRepository();

    async cadastraInfoPessoais(req:Request, res:Response){
        const inf:InfoPessoais = new InfoPessoais();
        inf.usuario = req.body.usuario;
        inf.sexo = req.body.sexo;
        inf.peso = req.body.peso;
        inf.altura = req.body.altura;
        inf.objetivo = req.body.objetivo;
        inf.nivel_atividade_fisica = req.body.nivel_atividade_fisica
        try{
            const rs = await this.infRepository.Cadastrar(inf)
            return res.status(201).json(rs)
        } catch (error){
            return res.status(500).json(error)
        }
    }

    async listarInfoPessoais(req:Request, res:Response){
        try{
            const rs = await this.infRepository.Listar();
            return res.status(200).json(rs)
        }
        catch(erro){
            return res.status(500).json(erro)
        }
    }
}