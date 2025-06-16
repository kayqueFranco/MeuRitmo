import  express  from "express"
import cors from"cors"
import UsuarioService from "./services/UsuarioService";


const app = express();
app.use(express.json())
app.use(cors())




const usu = new UsuarioService()







// ###############################################
app.post("/api/v1/usuario/cadastro",(req,res)=>{
    usu.cadastroUsuario(req,res);
})
app.get("/api/v1/usuario/listar", (req,res)=>{
    usu.listarUsuarios(req,res)
})


// ###############################################













app.listen(5000,()=>{
    console.log(`online em : http://127.0.0.1:5000`)
})