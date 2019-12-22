const {Router} = require('express')
const router = new Router()

router.get('/',(req,res)=>{
    res.render('add',{
        isAdd:true
        
    })
})


router.post('/',(req,res)=>{
    const name = req.body.title
    const price = req.body.price
    const url = req.body.img
   console.log({
       "name":name,
       "price":price,
       "url":url
   });
   
    res.status(200).json({
        message:"created"
    })
})


module.exports = router