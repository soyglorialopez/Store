const express = require('express');
const router = express.Router();
const store = require('../store/mysql');
const response = require('../response');

router.put('/:table', async (req, res) => {
    await store.update(req.params.table, req.body)
    .then(result =>  {
        response(res,'', result, 200)
        
    })
    .catch(error => {
        response(res, 'internal in session','error', 500)
        console.error(error)
    })    
});
router.post('/query/:table', async (req, res) => {
    await store.query(req.params.table, req.body)
        .then(result =>  {
            response(res,'', result, 200)
            
        })
        .catch(error => {
            response(res, 'internal in session','error', 500)
            console.error(error)
        })
    
     
});


router.get('/:table', async (req, res) => {
    await store.list(req.params.table)
        .then(result =>  {
            console.log(result)
            response(res,'', result, 200)})
        .catch(err => response(res, 'internal error','', 500))
    
     
});

router.post('/:table', async (req, res) => {
    await store.add(req.params.table, req.body)
        .then(result =>  {
            console.log(result)
            response(res,'', result, 200)})
        .catch(err => {
            response(res, 'internal error','err', 500)
            console.error(err)
        })
    
     
});





module.exports = router
