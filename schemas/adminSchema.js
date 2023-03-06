import mongoose from "mongoose"

const adminSchema = new mongoose.Schema({
    name: String,
    id: String,
    password: String,
    role: String
})

adminSchema.index({ id: 1 }, { unique: true })

export default mongoose.model("Admin", adminSchema)
