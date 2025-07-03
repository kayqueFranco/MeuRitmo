import usuario from "./Usuario";

export default class Alimentacao {
    id!:number;
    usuario!:usuario;
    refeicao!:string;
    oque_comeu!:string;
    quantidade_comeu!:string;
    hora!:number;
    datadia!:Date;
}