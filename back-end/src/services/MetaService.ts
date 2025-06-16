import Meta from "../classes/Meta";
import MetaRepository from "../repositories/MetaRepository";
import { Request, Response } from "express";


export default class MetaService{
    metRepository = new MetaRepository();


    async cadastroMeta(req:Request, res:Response){
        const met:Meta = new Meta();
        met.usuario = req.body.usuario;
        met.meta_tipo = req.body.meta_tipo;
        met.unidades = req.body.unidades
        met.data_inicio = req.body.data_inicio
        met.data_fim = req.body.data_fim
        met.valor_meta = req.body.valor_meta
        met.ativo = req.body.ativo
        met.ultima_atualizacao = req.body.ultima_atualizacao
        try{
            const rs = await this.metRepository.Cadastrar(met)
            return res.status(201).json(rs)
        } catch (error) {
            return res.status(500).json(error)
        }
    }




    async listarMeta(req:Request, res:Response){
         try{
            const rs = await this.metRepository.Listar();
            return res.status(200).json(rs)
         }
         catch(erro){
            return res.status(500).json(erro)
         }
    }
}