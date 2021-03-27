'use strict'
const services = require("../../services/product");
const productServices = new services();

module.exports =  {
        sale: async () => await productServices.getProducts({ product: ['sale'] }),
        newProducts: async () =>  await productServices.getLastProducts()
}



