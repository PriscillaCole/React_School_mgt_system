const db = require('../models')

//create main Model
const Student = db.students
const ShortCourseStudent = db.shortCourseStudents

//main work

//1. create a new student

const  addStudent = async (req, res) =>{
    let studentInfo = {
        user_id:req.body.user_id,
        student_id:req.body.student_id,
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        middle_name:req.body.middle_name,
        intake:req.body.intake,
        year_of_enrollment:req.body.year_of_enrollment,
        course_id:req.body.course_id,
        phone_number_1:req.body.phone_number_1,
        alternative_phone_number_2:req.body.alternative_phone_number_2,
        email:req.body.email,
        alternative_email:req.body.alternative_email,
        passport_photo:req.body.passport_photo,
        identity_document:req.body.identity_document,
        date_of_birth:req.body.date_of_birth,
        gender:req.body.gender,
        nationality:req.body.nationality,
        country_of_residence:req.body.country_of_residence,
        home_district:req.body.home_district,
        religious_affiliation:req.body.religious_affiliation,
    }

    const student = await Student.create(studentInfo)
    res.status(200).send(student)
}

//2 . get all students
 const getAllStudents = async (req, res) => {
  
    let students = await Student.findAll({})
    res.status(200).send(students)
}

//3. get single student

const getSingleStudent = async (req, res) => {
    let id = req.params.id
    let student = await Student.findOne({where: {id: id}})
    res.status(200).send(student)
}

//4. update Student

const updateStudent = async (req, res) => {
    
    let id = req.params.id
    const student = await Student.update(req.body, {where: {id: id}})
    res.status(200).send(student)

}

//5. delete student

const deleteStudent = async (req, res) => {
    let id = req.params.id
    await Student.destroy({where: {id: id}})
    res.status(200).send("student deleted")

}

module.exports ={
    addStudent,
    getAllStudents,
    getSingleStudent,
    updateStudent,
    deleteStudent
}