import cors from "cors"
import express from "express"
import user from "./routes/user.js"

const app = express()
const PORT = 3000

app.get("/", (req, res) => {
    res.status(200).json({message: "Working"})
})

app.use("/user", user)
app.use(express.json())
app.use(cors())

app.listen(PORT, 
    () => console.log(`Running on  http://localhost:${PORT}`)
)

