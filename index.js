import express from "express"

const app = express()
const PORT = 3000

app.get("/", (req, res) => {
    res.status(200).json({message: "Working"})
})

app.listen(PORT, 
    () => console.log(`Running on  http://localhost:${PORT}`)
)
