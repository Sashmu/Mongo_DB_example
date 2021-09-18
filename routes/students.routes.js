
const express = require('express')

const router = express.Router()

const Student = require('../models/student')
 const School = require('../models/school')

router.post('/', async (req, res)=>{

  const {firstName, lastName, age, registered,grades,school} = req.body

  try {
     const student = await Student.create({ firstName, lastName, age, registered, grades,school })
     const updatedSchool = await School.findByIdAndUpdate(school, { $push: { students: student._id } }, { new: true }).populate('students')
     
     res.send(updatedSchool)

  } catch(err) {
    res.send(err)
  }
})

module.exports = router;