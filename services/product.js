'use strict'
const db = require("../lib/pg");


const keysGenerator = (object) => {
    const keys = Object.keys(object);
    let text = [];
    let values = [];
    let i = 1;

    keys.forEach(element => {
        text.push(`${element}=($${i++})`);
        values.push(object[element])
    });

    return {
        text: text.join(', '),
        values
    };
};

class Products {
    constructor() {
        this.db = db
    }
    async add(data) {
        const query = {
            text: "INSERT INTO products(name, price, description, tags, quantity, img) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
            values: [data.name, data.price, data.description, data.tags, data.quantity, data.img]
        }

        return await this.db.insert(query)
    }

    async upsert(id, data) {
        const product = await this.getSpecificProduct(id);

        if (!product.rows[0]) {
            return await this.add(data);
        };
        const { text, values } = keysGenerator(data);

        const query = {
            text: `UPDATE products SET ${text}  WHERE id = ${id} RETURNING *`,
            values: values
        };
       
        return await this.db.insert(query);
    }

    async getSpecificProduct(id) {
        const query = {
            text: `SELECT * FROM products WHERE id = ${id}`,
        };
        return await this.db.get(query)
    }

    async getProducts(tags) {
        const query = {
            text: `SELECT * FROM products WHERE tags[1] = '${tags.product[0]}' OR tags[2] = '${tags.product[1]}' OR tags[1] = '${tags.product[1]}' OR tags[2] = '${tags.product[0]}' LIMIT 4`,
        };
        return await this.db.get(query)
    }

    async getLastProducts(quantity) {
        const query = {
            text: `SELECT * FROM products  ORDER BY id DESC LIMIT ${quantity}`,
        }
        return await this.db.get(query)
    }
}



module.exports = Products