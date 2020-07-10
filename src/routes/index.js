let router = require('express').Router();

router.get('/', (req, res)=>{
  res.render('templates/index')
})

module.exports =  router;