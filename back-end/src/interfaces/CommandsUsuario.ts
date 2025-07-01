import Commands from "./commands";

export default interface CommandsUsuaro<T> extends Commands<T>{
    login(usuario:string, senha:string):any;
    loginUCE(usuario:string,emiail:string, senha:string):any;
}