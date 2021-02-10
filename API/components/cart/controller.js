const db = require('../../../store/remote-mysql');
const product_db = require('../products/controller');
function controller(){
    return {
        add: async (body) => {
            let products = Object.keys(body);
            products.splice(0, 1)

            let cart = [];
            const cartShopping = {
                msg: []
            }
            let product, article, query;
            const purchasedProduct = {
                user_id : body.id,
                total: 0,
                
            }
           
            for(let i = 0; i < products.length; i++){
                product =  products[i]  //tenemos el nombre del producto
                article = body[product] //sacamos el producto del obejeto body
              query = await product_db.take(article.id, article.quantity)
              if(query){
                  article['total'] = article.price * article.quantity
                  cart.push(article)
              }else{   
                const finish ={
                   product: article.id, 
                   msg: 'ya no tenemos la cantidad que desea'}
                cartShopping['msg'].push(finish)
              }
            }
            cartShopping['buy'] = cart
           
           
            purchasedProduct['products'] =  JSON.stringify(cart);
            cart.forEach(product => {
                purchasedProduct['total'] += product.total;
            })

            console.log(purchasedProduct)
            await db.add(purchasedProduct, 'cart')
          
            return cartShopping

                
            }
            
        }

}


module.exports = controller()





















