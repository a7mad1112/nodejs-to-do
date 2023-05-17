
import { Router } from "express";
import * as taskController from "./controller/task.controller.js";
const router = Router()
//get all tasks
router.get('/', taskController.getTasks)
router.post('/addtask', taskController.addTask)
router.delete('/delete', taskController.deleteTask)
router.put('/update/task', taskController.updateTask)
router.patch('/update/title', taskController.updateTitle)
router.patch('/update/completion', taskController.updateCompletion)

export default router