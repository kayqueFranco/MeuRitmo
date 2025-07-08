import  express  from "express"
import cors from"cors"
import RespostaService from "./service/RespostaService";
import UsuarioService from "./service/UsuarioService";


const app = express();
app.use(express.json())
app.use(cors())


const resp = new RespostaService;
const usu = new UsuarioService;

app.get("/api/v1/resposta/listar",(req,res)=>{
    resp.listarRespostar(req,res)
})
app.post("/api/v1/resposta/cadastro",(req,res)=>{
    resp.cadastrarResposta(req,res)
})

//-------------------- USUARIO ------------------------

app.get("/api/v1/usuario/listar", (req,res)=>{
    usu.listarUsuario(req,res)
})





app.listen(5000,()=>{
    console.log(`online em : http://127.0.0.1:5000`)
})