import sharp from "sharp"
import fs from "node:fs/promises"

export const upload = async (req,res)=>{
    if(req.file){
        const image = await sharp(req.file.path)
        .toFormat('png').toFile(`./uploads/image/${Math.floor(Math.random() * 9999)}.png`)

        await fs.unlink(req.file.path)
    } else {
        res.json({msg:"Nenhum arquivo enviado"})
    }
    res.json({})
}