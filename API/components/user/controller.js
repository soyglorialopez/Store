const db = require('../../../store/remote-mysql');
const bcrypt = require('bcrypt')
 function controller(){
    return {
        list : (table) => db.list(table),
        add : async (data) =>  {
            if(!data.email || !data.password){
                throw Error('incomplete data');
            }
            const user = {
                name : data.name,
                email: data.email,
                direction: data.direction,
                password: await bcrypt.hash(data.password, 4)
            }
         
            
            return db.add(user, 'users')
        }
    }
}

module.exports = controller()