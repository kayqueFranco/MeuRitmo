import Sono from "../classes/Sono";
import SonoRepository from "../repositories/SonoRepository";
import { Request, Response } from "express";



export default class SonoService{
    sonRepository = new SonoRepository();


    async cadastroSono(req:Request, res:Response){
        const son:Sono = new Sono();
        son.usuario = req.body.usuario;
        son.horas_durmidas = req.body.hora_durmidas;
        son.qualidade_sono = req.body.qualidade_sono;
        son.hora_dormiu = req.body.hora_dormiu;
        son.hora_acordou = req.body.hora_acordou;
        son.datadia = req.body.datadia;
        try {
            const rs = await this.sonRepository.Cadastrar(son);
            return res.status(201).json(rs);
        } catch (error) {
            return res.status(500).json(error)
            
        }
    }

    async listarSono(req:Request, res:Response){
        try{
            const rs = await this.sonRepository.Listar();
            return res.status(200).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }
    }
}