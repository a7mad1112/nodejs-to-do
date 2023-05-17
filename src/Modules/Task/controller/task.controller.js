import taskModel from "../../../../DB/Models/task.model.js"

const getTasks = async (req, res) => {
    try {
        const tasks = await taskModel.findAll({})
        res.json({ message: "success", tasks })
    } catch (err) {
        console.log(err);
        res.json({ message: "fail to get tasks" })
    }
}

const addTask = async (req, res) => {
    let { title, assignee, details, date, priority, isCompleted } = req.body
    try {
        const task = await taskModel.create({ title, assignee, details, date, priority, isCompleted })
        res.json({ message: "success", task })
    } catch (err) {
        console.log(err);
        res.json({ message: "fail to add tasks" })
    }

}

const deleteTask = async (req, res) => {
    let { id } = req.query
    try {
        const task = await taskModel.destroy({
            where: { id }
        });
        if (task) {
            res.json({ message: "success", task })
        } else {
            res.json({ message: "invalid id" })
        }
    } catch (err) {
        console.log(err);
        res.json({ message: "fail to delete tasks" })
    }
}

const updateTask = async (req, res) => {
    let { id } = req.query
    let { title, assignee, details, date, priority, isCompleted } = req.body
    try {
        const task = await taskModel.update({ title,assignee,details,date,priority,isCompleted }, {
            where: {id}
        });
        if (task>0) {
            res.json({ message: "success", task })
        } else {
            res.json({ message: "invalid id" })
        }
    } catch (err) {
        console.log(err);
        res.json({ message: "fail to update tasks" })
    }
}

const updateTitle = async (req, res) => {
    let { id } = req.query
    let { title } = req.body
    try {
        const task = await taskModel.update({ title }, {
            where: {id}
        });
        if (task>0) {
            res.json({ message: "success", task })
        } else {
            res.json({ message: "invalid id" })
        }
    } catch (err) {
        console.log(err);
        res.json({ message: "fail to update tasks" })
    }
}


const updateCompletion = async (req, res) => {
    let { id } = req.query
    let { isCompleted } = req.body
    try {
        const task = await taskModel.update({ isCompleted }, {
            where: {id}
        });
        if (task>0) {
            res.json({ message: "success", task })
        } else {
            res.json({ message: "invalid id" })
        }
    } catch (err) {
        console.log(err);
        res.json({ message: "fail to update tasks" })
    }
}

export { getTasks, addTask, deleteTask, updateTask, updateTitle, updateCompletion }