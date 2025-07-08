import Usuario from "./Usuario";

export default class Resposta{
    id!:number;
    usuario!:Usuario;
    agua!:string;
    exercicio_semanal!:string;
    tempo_treino!:string;
    sono!:string;
    atividade_diaria!:string;
    frutas_vegetais!:string;
    doces_fritura!:string;
    fuma_bebe!:string;
    pontacao!:number;
}