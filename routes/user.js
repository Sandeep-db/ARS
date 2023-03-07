import cors from "cors"
import express from "express"
import User from "../schemas/userSchema.js"

const app = express.Router()

app.route("/login")
    .get(async (req, res) => {
        res.status(200).json({ message: "Login Success" })
    })

app.route("/register")
    .post(express.json(), async (req, res) => {
        let data = req.body
        console.log(req)
        res.status(200).json(data)
        return
        try {
            const user = new User({
                name: "Sandy",
                email: "sandyblaze911@gmail.com",
                phone: "919000810975",
                passwd: "sandy",
                address: {
                    country: "IN",
                    state: "AP",
                    city: "KKD"
                }
            })
            await user.save()
            res.status(200).json(admin)
        } catch (e) {
            res.status(403).json({ "message": e })
        }
    })

app.use(express.json())
app.use(cors())
const user = app
export default user
