const {Router} = require('express')
const router = new Router()

router.get('/',(req,res)=>{
    res.render('card',{
        isCard:true
    })
})


module.exports = router 