import { Hidratacao } from "../classes/hidratacao";
import HidratacaoRepository from "../repositories/HidratacaoRepository";
import { Request, Response } from "express";

export default class Hidratacaoservice{
    hidraRepository = new HidratacaoRepository();


        async cadastrarhidratacao(req:Request, res:Response){
            const hidra:Hidratacao = new Hidratacao()
            
            hidra.usuario = req.body.usuario;
            hidra.quantidade_agua_ml = req.body.quantidade_agua_ml;
            hidra.datadia = req.body.datadia

            try {
                const rs = await this.hidraRepository.Cadastrar(hidra);
                return res.status(201).json(rs);
            } catch (error) {
                return res.status(500).json(error)
            }
        }







    async listarHidratacao(req:Request, res:Response){
        try {
            const rs = await this.hidraRepository.Listar();
            return res.status(200).json(rs)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}