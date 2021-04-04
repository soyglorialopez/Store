'use strict'
const jwt = require('jsonwebtoken');
const config = require('../config/index');

function sing(data){
 return   jwt.sign(data, config.jwt.key)
}
function verify(token){
    return jwt.verify(token, config.jwt.key)
}

const check = {
    own: function(req, owner){
        const decoded = getToken(req)
        if(decoded.id !== owner){
            throw Error('No puedes hacer esto', 400)
        }
    }
}

function getToken(req){
    const authorization = req.headers.authorization || '';
   let token = authorization.replace('Bearer ','');
   const decoded = verify(token)
  req.user = decoded

    return decoded
}

module.exports = {
    sing,
    check
}