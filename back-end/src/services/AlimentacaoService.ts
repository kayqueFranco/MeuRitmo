import Alimentacao from "../classes/Alimentacao";
import AlimentacaoRepository from "../repositories/AlimentacaoRepository";
import { Request, Response } from "express";


export default class AlimentacaoService{
    aliRepository = new AlimentacaoRepository();

    async cadastroAlimentacao(req:Request, res:Response){
        const ali:Alimentacao = new Alimentacao();
        ali.usuario = req.body.usuario;
        ali.refeicao = req.body.refeicao;
        ali.oque_comeu = req.body.oque_comeu;
        ali.quantidade_comeu = req.body.quantidade_comeu;
        ali.hora = req.body.hora;
        ali.datadia = req.body.datadia;
        try {
            const rs = await this.aliRepository.Cadastrar
            (ali);
            return res.status(201).json(rs);
        }catch (error) {
            return res.status(500).json(error);
        }
    }

    async listarAlimentacao(req:Request, res:Response){
        try{
            const rs = await this.aliRepository.Listar();
            return res.status(200).json(rs);
        } catch (error) {
            return res.status(500).json(error)
        }
    }

}