const {Router} = require('express')
const router = new Router()
const Course = require('../models/course')
router.get('/',(req,res)=>{
    res.render('add',{
        isAdd:true
        
    })
})


router.post('/',(req,res)=>{
    const title = req.body.title
    const price = req.body.price
    const img = req.body.img
    Course.create({
       title:title,
       price:price,
       img:img,
       userId:1

    })

   
    res.status(200).json({
        message:"created"
    })
})


module.exports = router