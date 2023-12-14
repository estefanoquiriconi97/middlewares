const express = require('express');
const router = express.Router();
const adminMiddleware = require('../../middlewares/adminMiddleware')

router.get('/', function(req, res){
    res.render('index');
})

router.get('/services', function(req, res){
    res.send('services')
})

router.get('/services/desing', function(req, res){
    res.send('services/desing')
})

router.get('/admin', adminMiddleware,  (req, res) => {
    res.send('Hola Admin: ' + req.query.user);
})


module.exports = router;