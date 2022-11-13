const express = require('express');
const cors = require('cors');

const app = express();

var corOptions = {
    origin: '*',
    
}

// middleware
app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({extended: true}))

//routers
const router = require ('./routes/studentRouter.js')
app.use('/api/students', router)


//testing api
app.get('/', (req, res) => {
   res.json({message: 'hello from api'}) 
})

//port

const PORT = process.env.PORT || 8080

//server
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})