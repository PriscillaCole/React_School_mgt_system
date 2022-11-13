const { shortCourseStudents } = require(".");

module.exports =(sequelize, DataTypes) => {
    const ShortCourseStudent = sequelize.define("shortCourseStudent", {
    
        student_id:{
            type: DataTypes.STRING,
            allowNull: false
        },
        first_name:{
            type: DataTypes.STRING,

        },
        last_name:{
            type: DataTypes.STRING,
        },
        middle_name:{
            type: DataTypes.STRING,
        },
       
        passport_photo:{
            type: DataTypes.STRING,
            allowNull: false
        },
       
        date_of_birth:{
            type: DataTypes.DATE,
            allowNull: false
        },
        gender:{
            type: DataTypes.STRING,
            allowNull: false
        },
        nationality:{
            type: DataTypes.STRING,
            allowNull: false
        },
        phone_number:{
            type: DataTypes.INTEGER,
            
        },
        mobile_number:{
            type: DataTypes.INTEGER,
            
        },
        email_address:{
            type: DataTypes.STRING,
            allowNull: false
        },
        residential_address:{
            type: DataTypes.STRING,
            allowNull: false
        },
        education_level:{
            type: DataTypes.STRING,
            allowNull: false
        },
        course:{
            type: DataTypes.STRING,

        },
        intake:{
            type: DataTypes.STRING,
            
        },
        time:{
            type: DataTypes.STRING,
    
        },
        about_us_source:{
            type: DataTypes.STRING,
    
        },

        

    })

    return ShortCourseStudent
}