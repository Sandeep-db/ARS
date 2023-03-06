// import mongoose from "mongoose"

// let dbConnection

// const connection = {
//     connectDB: (callback) => {
//         mongoose.connect("mongodb://localhost:27017")
//             .then(() => {
//                 console.log("db connected")
//                 dbConnection
//                 return callback()
//             })
//             .catch(error => {
//                 console.error(error)
//                 return callback(error)
//             })
//     },
//     getDB: () => dbConnection
// }