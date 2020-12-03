const express = require('express')
const router = express()

//router.set('view-engine','ejs')

router.get('/', (req,res)=>{
      
 res.render('index.ejs')
// res.send("okk")

})
module.exports = router