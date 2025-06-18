import Exercicio from "../classes/Exercicio";
import {Request, Response } from "express";
import ExercicioRepository from "../repositories/ExercicioRepository";


export default class ExercicioService{
    exeRepository = new ExercicioRepository();

    async cadastroExercicio(req:Request, res:Response){
        const exe:Exercicio =  new Exercicio();
        exe.usuario = req.body.usuario;
        exe.tipo_exercicio = req.body.tipo_exercicio;
        exe.duracao_min = req.body.duracao_min;
        exe.intensidade = req.body.intensidade;
        exe.datadia = req.body.datadia
        try{
            const rs = await this.exeRepository.Cadastrar(exe)
            return res.status(201).json(rs)
        } catch (error){
            return res.status(500).json(error)
        }
    }

    async listarExercicio(req:Request, res:Response){
        try{
            const rs =  await this.exeRepository.Listar();
            return res.status(201).json(rs)
        }
        catch(erro){
            return res.status(500).json(erro)
        }
    }
}