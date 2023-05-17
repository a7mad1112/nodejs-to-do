import taskRouter from "./Modules/Task/task.route.js"
import cors from 'cors'
const initApp = (app,express)=>{
    app.use(cors())
    app.use(express.json())
    app.use('/api/v1/tasks',taskRouter)
    app.use('*',(req,res)=>{
        res.json({message:"page not found"})
    })
}


export default initApp