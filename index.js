import cors from "cors"
import express from "express"
import mongoose from "mongoose"
import user from "./routes/user.js"
import Admin from "./schemas/adminSchema.js"


mongoose.connect("mongodb://localhost:27017/ars")
    .then(() => {
        console.log("db connected")
        app.listen(PORT,
            () => console.log(`Running on  http://localhost:${PORT}`)
        )
    })

const app = express()
const PORT = 3000

app.get("/", (req, res) => {
    res.status(200).json({ message: "Working" })
})

app.get("/addAdmin", async (req, res) => {
    const admin = new Admin({ id: "ars2", name: "Jayanth", password: "Jayanth", role: "admin" })
    try {
        await admin.save()
        res.status(200).json(admin)
    } catch (e) {
        res.status(403).json({"message": e})
    }
})

app.use("/user", user)
app.use(express.json())
app.use(cors())

