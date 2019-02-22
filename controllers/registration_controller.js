const mongoose = require('mongoose');
const express = require('express')
const passport = require('passport')
const login = require('../models/login_details.model')
const student_personal = require('../models/Student_details_personal.model')
const student_academic = require('../models/Student_details_academic.model')
const courselist = require('../models/course_list.model')

exports.registercourse = (req, res) => {
    console.log('Registration Required')
    course = req.body.coursecode
    courselist.findOne({
        Coursecode: course
    }, function(err, course_list_db) {
        if (err) {
            res.send('error occured')
            console.log("error in student_personal")
        } else {
            clist = course_list_db
            console.log(course_list_db.Teacher)
            res.render("../views/registration3", {
                'register': register_no,
                'email': email,
                'course': clist
            })
        }
    })
}
