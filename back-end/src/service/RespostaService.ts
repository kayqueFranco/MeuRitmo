import Resposta from "../classes/Resposta";
import RespostaRepository from "../repositories/RepostaRepository";
import { Request, Response } from "express";

export default class RespostaService{
    resRepository = new RespostaRepository();
    
    async cadastrarResposta(req:Request,res:Response){
       const resp:Resposta= new Resposta;
        resp.usuario = req.body.id_usuario;
        resp.agua = req.body.agua;
        resp.exercicio_semanal = req.body.exercicio_semanal;
        resp.tempo_treino = req.body.tempo_treino;
        resp.sono = req.body.sono;
        resp.atividade_diaria = req.body.atividade_diaria;
        resp.frutas_vegetais = req.body.frutas_vegetais;
        resp.doces_fritura = req.body.doces_fritura;
        resp.fuma_bebe = req.body.fuma_bebe;
        resp.pontuacao = req.body.pontuacao;
       
        try {
            const rs = await this.resRepository.Cadastrar(resp)
            return res.status(200).json(rs)
        } catch (erro) {
            return res.status(200).json(erro)
        }
    }



    

    async listarRespostar(req:Request, res:Response){
        try{
            const rs = await this.resRepository.Listar();
            return res.status(200).json(rs)
        }
        catch(erro){
            return res.status(500).json(erro)
        }
    }

    async cadastrarPreferencias(req:Request,res:Response){
        let obj = {
            sexo: req.body.sexo,
            objetivo: req.body.objetivo,
            peso: req.body.peso,
            usuario:req.body.usuario,
            agua:req.body.agua,
            exercico_semanal:req.body.exercicio_semanal,
            tempo_treino:req.body.tempo_treino,
            sono:req.body.sono,
            frutas_vegetais:req.body.frutas_vegetais,
            frituras_doces:req.body.frituras_doces,
            fuma_bebe:req.body.fuma_bebe
        }
        try {
            const rs = await this.resRepository.CadastrarPreferencias(obj.sexo,obj.objetivo,obj.peso,obj.usuario,obj.agua,obj.exercico_semanal,obj.tempo_treino,obj.sono,obj.frutas_vegetais,obj.frituras_doces,obj.fuma_bebe)
            console.log(rs)
            return res.status(200).json(rs)
        } catch (erro) {
            return res.status(200).json(erro)
        }
    }
}