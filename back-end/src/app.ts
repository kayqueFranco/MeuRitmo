import  express  from "express"
import cors from"cors"
import UsuarioService from "./services/UsuarioService";
import SonoService from "./services/SonoService";
import MetaService from "./services/MetaService";


const app = express();
app.use(express.json())
app.use(cors())




const usu = new UsuarioService()
const son = new SonoService()
const met = new MetaService()






// ###############################################
app.post("/api/v1/usuario/cadastro",(req,res)=>{
    usu.cadastroUsuario(req,res);
})
app.get("/api/v1/usuario/listar", (req,res)=>{
    usu.listarUsuarios(req,res)
})


// ##################### SONO ##########################
app.get("/api/v1/sono/listar", (req,res)=>{
    son.listarSono(req,res)
})

app.post("/api/v1/sono/cadastro", (req,res)=>{
    son.cadastroSono(req,res)
})


// ##################### METEEEEEEE ##########################
app.get("/api/v1/meta/listar", (req,res)=>{
    met.listarMeta(req,res)
})

app.post("/api/v1/meta/cadastro", (req,res)=>{
    met.cadastroMeta(req,res)
})








app.listen(5000,()=>{
    console.log(`online em : http://127.0.0.1:5000`)
})