'use strict'
const db = require('../../../store/remote-mysql');


async function home() {
   let query = {tag: 'offers'}
    let offers = await db.last(product,{tag: 'offers'} )
    let newProducts = await db.last({tag: 'news'})

}



module.exports = {
    home
}