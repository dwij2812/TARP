const mongoose = require('mongoose')
const express = require('express')
const passport = require('passport')
const login = require('../models/login_details.model')
const student_personal = require('../models/Student_details_personal.model')
const student_academic = require('../models/Student_details_academic.model')
const courselist = require('../models/course_list.model')

exports.registercourse = (req, res) => {
    course = req.body.coursecode
    courselist.findOne({
        Coursecode: course
    }, function(err, course_list_db) {
        if (err) {
            res.send('error occured')
            console.log("error in student_personal")
        } else {
            clist = course_list_db
            res.render("../views/registration3", {
                'register': register_no,
                'email': email,
                'course': clist
            })
        }
    })
}
exports.registercourseteacher = (req, res) => {
    course_i = req.body.coursecode
    faculty_i = req.body.faculty_val
    slot_i = req.body.slot_val
    register = req.body.registerno
    student_academic.findOneAndUpdate({Registerno: register},
    { $push: {List_Course: {coursecode: course_i, faculty: faculty_i, slot: slot_i}} },
    {new: true})
    .exec(function(err,done){
        res.render("../views/reg_ack",{course:course_i,slot:slot_i,faculty:faculty_i})
        courselist.findOneAndUpdate({Coursecode:course_i, 'Teacher.Name':faculty_i},
            {$inc : {'Teacher.$.available': -1}},
            {new: true}
        )
        .exec(function(err,done){
            console.log(done)
            console.log("decremented")
        })

    })
}
