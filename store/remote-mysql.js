const axios = require('axios');
const config = require('../config');

function createRemoteDB(host, port){
    const URL = `http://${host}:${port}`

    function add(data, table){
        return req('POST', table, data)
    };
    function list(table){
        return req('GET', table)
    };
    function query(data, table){
        return req('POST', table , data, 'ident')
    };
    function update(table, data){
        return req('PUT', table, data)
    };

   async function req(method, table, data, ident){
    let url, result, rs
    const options = {
        method : method,
        headers: { 'content-type': 'application/json'},
    }
    if(data && ident){
        options['url'] = URL + '/query/' + table + '/'
    }else{
        options['url'] = URL + '/' + table + '/' 
    }

    if(data){
        options['data'] = data
    }

        try {
            result = await axios(options)
            //obtenemos la data  de la peticion
            rs = result.data['body'] 
        } catch (error) {
           console.error(error.message);     
        }
    return rs
    }

    return {
        list,
        add,
        query,
        update
    }
}

module.exports = new createRemoteDB(config.db.host, config.db.port)