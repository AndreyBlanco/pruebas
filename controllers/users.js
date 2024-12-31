const path = require('path');
const mongodb = require('../db/connect');

var estudiantes = [];

const home = (req, res) => {
    res.sendFile(path.join(__dirname,'../html/students.html'));
};

const students = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection('students').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);  
    });
    
};



const teachers = async (req, res, next) => {
    const result = await mongodb.getDb().db().collection('teachers').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
};

const disabilities = async (req, res, next) => {
    const result = await mongodb.getDb().db().collection('disabilities').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
};

module.exports = {home, students, teachers, disabilities};

exports = {estudiantes};