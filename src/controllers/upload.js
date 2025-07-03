import sharp from "sharp"
import fs from "node:fs/promises"
import * as uploadServices from "../services/upload.js"

export const upload = async (req,res)=>{
    const { name } = req.body

    if(req.file){
        const random = Math.floor(Math.random() * 9999)
        await sharp(req.file.path)
        .toFormat('png')
        .toFile(`./uploads/image/${random}.png`)
    
        const file = await uploadServices.postImage(name, `./uploads/image/${random}.png`)
        if(!file){
            await fs.unlink(req.file.path)
            return res.json({msg: "Nada retornado"})
        }
        await fs.unlink(req.file.path)
        return res.json({file: file})
    } else {
        res.json({msg:"Nenhum arquivo enviado"})
    }
}