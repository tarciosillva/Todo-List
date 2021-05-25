const database = require('../database/connection')

class TaskController {
    newTask(request, response) {
        const { task, description, responsible } = request.body

        console.log({ task, description, responsible })

        database.insert({ task, description, responsible }).table("tasks").then(data => {
            console.log(data)
            response.json({ message: "Tarefa criada com sucesso" })
        }).catch(error => {
            console.log(error)
        })
    }

    listTasks(request, response) {
        database.select("*").table("tasks").then(tasks => {
            console.log(tasks)
            response.json(tasks)
        }).catch(error => {
            console.log(error)
        })
    }

    listThisTask(request, response) {
        const id = request.params.id

        database.select("*").table("tasks").where({ id: id }).then(task => {
            response.json(task)
        }).catch(error => {
            console.log(error)
        })
    }

    updateTask(request, response) {
        const id = request.params.id
        const { task } = request.body
        
        database.where({id:id}).update({task:task}).table("tasks").then(data=>{
            response.json({data})
        }).catch(error=>{
            response.json(error)
        })
    }

    deleteTask(request, response){
        const id = request.params.id

        database.where({id:id}).del().table("tasks").then(data=>{
            response.jdon({message:"Tarefa removida com sucesso"})
        }).catch(error=>{
            response.json(error)
        })
    }
}


module.exports = new TaskController()