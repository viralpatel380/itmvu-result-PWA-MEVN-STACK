

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//mongoose.connect(process.env.MLAB);
const student = require('./student_profile');
// db  = require('./config/db');
app.use(bodyParser.urlencoded({ extend: false }));  
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('App Successful listening on port 3000');
});
const mongoose = require('mongoose');
mongoose.connect('mongodb://viral:123@ds227168.mlab.com:27168/itmvu');

  
const cors = require('cors');
//const express = require('express');
//let app = express();
app.use(cors());
app.options('*', cors());

  app.get('/', (req, res) => {
   // student.find((err, student) => {
     //   if (err)
            console.log("API runs" );
//  return  res.json(student);
   // });
});






app.get('/:id', (req, res) =>
 // console.log('getting all student');
  student.findOne({
    no: req.params.id
    })
    .exec((err, student) => {
      if(err) {
        res.send('error occured')
      } else {
       // console.log(student);
        res.json(student);
        console.log("API runs" );
    }
}));