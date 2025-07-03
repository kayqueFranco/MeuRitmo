import Usuario from "./Usuario";


export default class Exercicio{
    id!:number;
    usuario!:Usuario;
    tipo_exercicio!:string;
    duracao_min!:string;
    intensidade!:string;
    datadia!:Date;
}