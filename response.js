module.exports = function(res, msg, body, status){
   return  res.status(status).send({
        msg: msg,
        body: body
    }); 

    
}