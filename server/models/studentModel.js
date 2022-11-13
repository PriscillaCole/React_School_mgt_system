module.exports =(sequelize, DataTypes) => {
    const Student = sequelize.define("student", {
        user_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
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
        intake:{
            type: DataTypes.STRING,
            
        },
        year_of_enrollment:{
            type: DataTypes.DATE,
    
        },
        course_id:{
            type: DataTypes.INTEGER,

        },
        phone_number_1:{
            type: DataTypes.INTEGER,
            
        },
        alternative_phone_number_2:{
            type: DataTypes.INTEGER,
            
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false
        },
        alternative_email:{
            type: DataTypes.STRING,
        
        },
        passport_photo:{
            type: DataTypes.STRING,
            allowNull: false
        },
        identity_document:{
            type: DataTypes.STRING,
            
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
        country_of_residence:{
            type: DataTypes.STRING,
            allowNull: false
        },
        home_district:{
            type: DataTypes.STRING,
            allowNull: false
        },
        religious_affiliation:{
            type: DataTypes.STRING,
    
        },
        

    })

    return Student
}