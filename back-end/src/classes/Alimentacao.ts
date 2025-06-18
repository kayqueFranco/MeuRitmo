import Usuario from "./Usuario";

export default class Alimentacao {
    id!:number;
    usuario!:string;
    refeicao!:string;
    descricao!:string;
    caloria_aproximada!:number;
    hora!:number;
    datadia!:Date;
}