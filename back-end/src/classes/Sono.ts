import Usuario from "./Usuario";

export default class Sono {
    id!:number;
    usuario!:Usuario;
    horas_durmidas!:number;
    qualidade_sono!:string;
    hora_dormiu!:number;
    hora_acordou!:number;
    datadia!:Date;
}