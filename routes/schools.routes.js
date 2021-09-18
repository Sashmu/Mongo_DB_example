const express = require('express');
const router = express.Router();

const School = require("../models/school");

router.post("/",  async (req, res)=>{
    const { name, address } = req.body;
    const { country, city, street, number } = address;

  
// VALIDATION
    const errors =  []

    if (!name || !country || !city || !street || !number) {
        errors.push({ validationError: "All fields must be filled" })
     }
 
    
    if(!Number(number)){errors.push({ validationError: "Address number is not a valid number" })} 

    if (errors.length == 0) {
   
     School.find({})
     
        .then((allSchools)=>{
            const sameSchool = allSchools.filter((school)=> school.name === name)

            if(sameSchool){
                const sameCity = sameSchool.filter((school)=> school.address.city === city)

                if(sameCity.length > 0){
                    errors.push({ validationError: "School name is already in this city" }) 
                    res.status(422).json(errors)
                } else {
                    School.create({ name, address })
                    .then((data)=>{ res.send(data) })
                }

            } else { 
                School.create({ name, address })
                .then((data)=>{ res.send(data) })
            }
        })
        .catch((err)=>{ 
            res.send(err) 
            // res.status(422).json(errors)
        })
    } else {
        res.status(422).json(errors)
    }
});

module.exports = router;