import File from "../schemas/file.js"


export const postImage = async (nameFile, source)=>{
    try {
        const file = new File({
            name: nameFile,
            src: source
        })
        
        await file.save()
        return file
    } catch (error) {
        return false
    }
}