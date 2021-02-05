const connection = require('../database/connection')
const express = require("express")
const router = express.Router()
const TaskController = require('../controllers/TaskController')

router.post('/newTask', TaskController.newTask)

router.get('/tasks', TaskController.listTasks)

router.get('/task/:id', TaskController.listThisTask)

router.put('/update/task/:id', TaskController.updateTask)

router.delete('/delete/task/:id', TaskController.deleteTask)

module.exports = router