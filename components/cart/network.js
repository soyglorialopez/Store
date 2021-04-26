const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
        res.render('cart', {
                user: req.cookies.name,
        })

});

module.exports = router
