import  express  from "express"
import cors from"cors"
import UsuarioService from "./services/UsuarioService";
import SonoService from "./services/SonoService";
import MetaService from "./services/MetaService";
import AlimentacaoService from "./services/AlimentacaoService";
import InfoPessoaisService from "./services/InfoPessoaisService";
import ExercicioService from "./services/ExercicioService";
import Hidratacaoservice from "./services/HidratacaoService";


const app = express();
app.use(express.json())
app.use(cors())




const usu = new UsuarioService()
const son = new SonoService()
const met = new MetaService()
const ali = new AlimentacaoService()
const inf = new InfoPessoaisService()
const exe = new ExercicioService();
const hidra = new Hidratacaoservice()




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

// #################### ALIMENTAÇãO ##########################
app.get("/api/v1/alimentacao/listar", (req,res)=>{
    ali.listarAlimentacao(req,res)
})

app.post("/api/v1/alimentacao/cadastro", (req,res)=>{
    ali.cadastroAlimentacao(req,res)
})

// ################## Informações Pessoais ###################
app.get("/api/v1/cadinfo/listar", (req,res)=>{
    inf.listarInfoPessoais(req,res)
})

app.post("/api/v1/cadinfo/cadastro", (req,res)=>{
    inf.cadastraInfoPessoais(req,res)
})

// ################## EXERCICIO ################################
app.get("/api/v1/exercicio/listar", (req,res)=>{
    exe.listarExercicio(req,res)
})

app.post("/api/v1/exercicio/cadastra", (req,res)=>{
    exe.cadastroExercicio(req,res)
})





// #############################################################
app.post("/api/v1/hidratacao/cadastrar", (req,res)=>{
    hidra.cadastrarhidratacao(req,res)
})
app.get("/api/v1/hidratacao/listar", (req,res)=>{
    hidra.listarHidratacao(req,res)
})





app.listen(5000,()=>{
    console.log(`online em : http://127.0.0.1:5000`)
})