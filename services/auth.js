const db = require('../../../store/remote-mysql');
const bcrypt = require('bcrypt');
const token = require('../../../token/index');
 function controller(){
    return {
        login: async (email, password) => {
            const data = await db.query({email: email}, 'users');
            const finalData = data[0]
            console.log(finalData)
            const result = await bcrypt.compare(password, finalData.password);
            if (result) {
                return token.sing(finalData)
            }
        }
    }
}

module.exports = controller()