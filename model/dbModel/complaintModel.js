const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema(
    {
        complaintFrom : {
            type : String,
            required : true
        },
        hostel : {
            type : String,
            required : true
        },
        time : {
            type : Date,
            required : true
        },
        subject : {
            type : String,
            required : [true, 'A Complaint should have a subject']
        },
        description : {
            type : String,
            required : [true, 'A Complaint should have a description']
        },
        category : {
            type : String,
            required : [true, 'A Complaint should be of some category'],
            enum : ['civil','mess']
        },
        status : {
            type : String,
            required : [true, 'A complaint should have a status'],
            enum : ['pending', 'solved']
        },
        remark : {
            type : String,
        }
    }
)