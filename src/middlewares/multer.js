import multer from "multer"

//OPÇÕES DE MEMORIA PARA USAR
const diskStorage = multer.diskStorage({
    filename: (req, file, cb) => {
        const prefix = `${Math.floor(Math.random() * 9999)}`
        console.log(prefix)
        cb(null, prefix+'.png')
    },
    destination: (req, file, cb) => {
        cb(null, "./uploads/temp")
    }
})

const memStorage = multer.memoryStorage()



export const upload = multer({
    dest: "./uploads/temp" //BASTA SUBSTITUIR AQUI QUAL DAS VARIÁVEIS ACIMA VAI USAR
})