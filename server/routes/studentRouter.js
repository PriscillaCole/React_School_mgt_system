const studentController = require('../controllers/studentController.js')

const router = require('express').Router()

router.post('/addStudent', studentController.addStudent)

router.get('', studentController.getAllStudents)

router.get('/:id', studentController.getStudentById)

router.put('/:id', studentController.updateStudent)

router.delete('/:id', studentController.deleteStudent)

module.exports = router