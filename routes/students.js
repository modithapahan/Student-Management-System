const router = require('express').Router();
const students = require('../models/student');

//Create
router.route('/add').post(async (req,res) => {
    const{name,age,gender} = req.body;
    const student = {name,age,gender};

    const stuObj = new students(student);
    await stuObj.save().then(()=>{
        res.status(200).send({status:"Student Added!"});
    }).catch((error) => {
       res.status(500).send(Error);
    })
})

//Read
router.route('/').get(async (req,res) => {

    const studentDetails = await students.find().then((studentDetails)=>{
        res.status(200).send(studentDetails)
    }).catch((error)=>{
        res.status(500).send(error);
    })
})

//update
router.route('/update/:id').put(async (req,res) => {
    const userID = req.params.id;

    const {name,age,gender} = req.body;
    const updateDetails = {name,age,gender};

    await students.findByIdAndUpdate(userID,updateDetails).then(()=>{
        res.status(200).send({status:"Student Updated!"})
    }).catch((error)=>{
        res.status(500).send(error);
    })
})

//delete
router.route('/delete/:id').delete(async (req,res) => {
    const userID = req.params.id;

    await students.findByIdAndDelete(userID).then(()=>{
        res.status(200).send({status:"Student Delete!"})
    }).catch((error)=>{
        res.status(500).send(error)
    })
})

module.exports = router;