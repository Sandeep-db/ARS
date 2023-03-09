import cors from "cors"
import express from "express"
import User from "../schemas/userSchema.js"

const app = express.Router()

app.route("/login")
    .post(express.json(), async (req, res) => {
        let { email, passwd } = req.query
        // let { email, passwd } = req.body
        let user = await User.findOne({ email: email, passwd: passwd, verified: true })
        if (!user) {
            res.status(404).json({ message: "no user found" })
        } else {
            user.passwd = ""
            res.status(200).json(user)
        }
    })

app.route("/register")
    .post(express.json(), async (req, res) => {
        let data = req.body
        try {
            const user = new User({
                name: data.name,
                email: data.email,
                phone: data.phone,
                passwd: data.passwd,
                address: {
                    country: data.country,
                    state: data.state,
                    city: data.city
                }
            })
            let msg = await user.save()
            res.status(200).json(msg)
        } catch (e) {
            res.status(403).json({ "message": e })
        }
    })

app.route("/newhost")
    .post(express.json(), async (req, res) => {
        // let data
    })

app.route("/verification/:email/:objcode")
    .get(async (req, res) => {
        let email = req.params.email
        let objcode = req.params.objcode
        console.log(email, objcode)
        let user = await User.findOne({ email: email })
        res.status(200).json(user)
    })

app.use(express.json())
app.use(cors())
const user = app
export default user
