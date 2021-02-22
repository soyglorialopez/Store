const { verify } = require("jsonwebtoken");
const { jwt } = require("../../../config");

const secret = require('../../../config');
const token = require("../../../token");
module.exports = function (action){
    
        function middleware(req, res, next){
            switch(action){
                case 'pay':
                    let owner  = req.body.id
                    token.check.own(req, owner);
                    next()
                   break;

               default:
                next()
            }
    
    
        }
    return middleware
}