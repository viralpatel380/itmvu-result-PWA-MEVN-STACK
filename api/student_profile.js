



const mongoose = require('mongoose');

const profil_Schema = new mongoose.Schema({
   
    name : String,
    no : String,
    branch : String,
    sem : String,
    cpi : String,
    total_backlog : String,
    back_1 : Number,
    back_2 : Number,
    back_3 : Number,
    back_4 : Number,
    back_5 : Number,
    back_6 : Number,
    back_7 : Number,
    back_8 : Number,
    result : String,
    sub1 : String,
    sub2 : String,
    sub3 : String,
    mark1 : String,
    mark2 : String,
    mark3 : String,
    back : Number

},{ collection: 'student_profile' });

module.exports = mongoose.model('profile', profil_Schema);
