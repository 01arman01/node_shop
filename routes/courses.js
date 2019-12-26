const {Router} = require('express')
const router = new Router()
const Course = require('../models/course')
router.get('/',async(req,res)=>{
  const courses = await Course.findAll()
//   console.log(courses[0].course)
res.render('courses',{
    title:"курсы",
    courses,
    isCourses:true
    
})
})

router.get('/:id',async(req,res)=>{
  const id = req.params.id
  const course = await Course.findOne({
    where:{
      id:id
    }
  })
  // console.log(course)
  res.render('course',{
    title:`Курc ${course.title}`,
    layout:"empty",
    course
  })

})

router.get('/:id/edit',async(req,res)=>{
  if(!req.query.allow){
    return res.redirect('/courses')
  }
const id = req.params.id

const  course = await Course.findByPk(id)
// console.log(course)

  res.render('course-edit',{
    course
  })



})


router.put('/edit/:id',async(req,res)=>{
  try{
      console.log(req.body)
      const course =await Course.findByPk(+req.params.id)
       
      course.title = req.body.title || course.title 
      course.price = req.body.price ||  course.price 
      course.img = req.body.img  || course.img 
      res.redirect('/courses')
      await course.save()
     

  }catch(e){
   console.log(e)
   res.status(500).json({
       message:'server error'
   })
  }
})


module.exports = router