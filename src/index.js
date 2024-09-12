import dotenv from 'dotenv'
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"
})
connectDB()


// Normal Approch to connect database 
// (async ()=>{
//     try {
//        await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("error",error);
//             app.listen(process.env.PORT, ()=>{
//                 console.log(`Pot is listing on ${process.env.PORT}`)
//             })
            
//         })
//     } catch (error) {
//         console.error("Error: ",error )
//     }
// })()