import mongoose from "mongoose"

const addressSchema = new mongoose.Schema({
    country: String,
    state: String,
    city: String
})

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        length: 12
    },
    CreatedAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    },
    passwd: {
        type: String,
        required: true
    },
    address: addressSchema,
})

userSchema.index({ email: 1 }, { unique: true })
userSchema.index({ phone: 1 }, { unique: true })

export default mongoose.model("User", userSchema)
