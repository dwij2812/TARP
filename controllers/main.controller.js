const mongoose = require('mongoose');
const express = require('express')
const passport = require('passport')
const login = require('../models/login_details.model')
const student_personal = require('../models/Student_details_personal.model')
const student_academic = require('../models/Student_details_academic.model')
const courselist = require('../models/course_list.model')


exports.index = (req, res) => {
    res.render("../views/login")
}
exports.login = (req, res) => {
    register_no = req.body.username
    password = req.body.password
    login.findOne({
            Registerno: register_no
        })
        .exec(function(err, login_db) {
            if (err) {
                res.send('error occured')
            } else {
                if ((login_db['Registerno']) == register_no && login_db['Password'] == password) {
                    student_personal.findOne({
                            Registerno: register_no
                        })
                        .exec(function(err, student_personal_db) {
                            if (err) {
                                res.send('error occured')
                                console.log("error in student_personal")
                            } else {
                                name = student_personal_db['Name']
                            }
                            passport.authenticate('local')(req, res, function() {
                                res.render("../views/dashboard", {
                                    name: name,
                                    register: register_no
                                })
                            });
                        });
                }
            };
        });
}
exports.detail = (req, res) => {
    register_no = req.body.regno
    console.log(register_no)
    student_personal.findOne({
            Registerno: register_no
        })
        .exec(function(err, student_personal_db) {
            if (err) {
                res.send('error occured')
                console.log("error in student_personal")
            } else {
                name = student_personal_db['Name']
                email = student_personal_db['Email']
                mobile = student_personal_db['Mobile']
                address = student_personal_db['Address']
                student_academic.findOne({
                        Registerno: register_no
                    })
                    .exec(function(err, student_academic_db) {
                        console.log(student_academic_db)
                        if (err) {
                            res.send('error occured')
                            console.log("error in student_academic")
                        } else {
                            cgpa = student_academic_db['CGPA']
                            ccomp = student_academic_db['Credits_c']
                            creg = student_academic_db['Credits_R']
                        }
                        passport.authenticate('local')(req, res, function() {
                            res.render("../views/profile", {
                                name: name,
                                register: register_no,
                                email: email,
                                attendance: "98",
                                CGPA: cgpa,
                                ccomp: ccomp,
                                creg: creg,
                                mobile: mobile,
                                email: email,
                                address: address
                            });
                        });
                    });
            }
        });
}
exports.register = (req, res) => {
    register_no = req.body.regno
    console.log(register_no)
    student_personal.findOne({
            Registerno: register_no
        })
        .exec(function(err, student_personal_db) {
            if (err) {
                res.send('error occured')
                console.log("error in student_personal")
            } else {
                name = student_personal_db['Name']
                email = student_personal_db['Email']
                mobile = student_personal_db['Mobile']
            }
            res.render("../views/registration", {
                'name': name,
                'register': register_no,
                'email': email
            })
        })
}
exports.regular = (req, res) => {
    register_no = req.body.regno
    student_personal.findOne({
            Registerno: register_no
        })
        .exec(function(err, student_personal_db) {
            if (err) {
                res.send('error occured')
                console.log("error in student_personal")
            } else {
                name = student_personal_db['Name']
                email = student_personal_db['Email']
                mobile = student_personal_db['Mobile']
            }
        })
    courselist.find({}, function(err, course_list_db) {
        if (err) {
            res.send('error occured')
            console.log("error in student_personal")
        } else {
            clist = course_list_db
        }
        res.render("../views/registration2", {
            'register': register_no,
            'email': email,
            'courselist': clist
        })
    })
}

exports.timetable = (req, res) => {
    res.render("../views/timetable")
    register_no = req.body.regno
    console.log(register_no)
}
