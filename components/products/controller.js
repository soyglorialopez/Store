const { query } = require('express');
const db = require('../../../store/remote-mysql');

 function controller(){
    return {
        list : (table) => db.list(table),
        add : async (data) =>  {
            const product = {
                name : data.name,
                description : data.description,
                price: data.price,
                offer: data.offer,
                quantity: data.quantity
            }
            
            return db.add(product, 'products')
        }, 
        query: (product) => {
            let query
            if(product === 'offers'){
              query = {'offer': 'true'};
            }else{
                 query = {'name' : product};
            }
            return db.query(query, 'products')
        },
        take : async (idProduct , quantity) => {
            let product = await db.query({'id': idProduct }, 'products');
            let finalProduct = product[0];
            let msg
            if(finalProduct['quantity']=== 0 || finalProduct['quantity'] < quantity){
                return  null
            }
            finalProduct['quantity'] -= quantity
            let data = {
                id: finalProduct['id'],
                quantity: finalProduct['quantity']
            }
            let query2 = await db.update('products', data)
      
           return query2
        }
    }
}

module.exports = controller()