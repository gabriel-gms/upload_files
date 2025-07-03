import mongoose from "mongoose"

const Schema = mongoose.Schema

const file = new Schema({
    name: {
        type: String,
        require: true
    },
    src: {
        type: String,
        require: true
    }
})

export default mongoose.model("File", file)