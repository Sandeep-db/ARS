import cors from "cors"
import express from "express"

const app = express.Router()

app.route("/login")
    .get(async (req, res) => {
        res.status(200).json({message: "Login Success"})
    })

app.use(express.json())
app.use(cors())
const user = app
export default user
