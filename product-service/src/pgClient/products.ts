import { Client } from 'pg'

import config from './config'

const dbOptions = {
    ...config,
    ssl: {
        rejectUnauthorized: false
    },
    connectionTimeoutMillis: 5000
}

export const getProducts = async () => {
    const client = new Client(dbOptions)
    try {
        await client.connect()
        const { rows } = await client.query(`SELECT p.*, s.count FROM products p
                                                INNER JOIN stocks s
                                                ON s.product_id = p.id `)
        return rows
    } catch (e) {
        console.error(e)
    } finally {
        await client.end()
    }
}

export const getProductByID = async (id: string) => {
    const client = new Client(dbOptions)
    try {
        await client.connect()
        const { rows } = await client.query('SELECT * FROM products WHERE ID = $1', [id])
        return rows[0]
    } catch (e) {
        console.error(e)
    } finally {
        await client.end()
    }
}

export const createProduct = async ({ title, description, price, count }) => {
    const client = new Client(dbOptions)
    try {
        await client.connect()
        await client.query('BEGIN')
        const { rows } = await client.query('INSERT INTO products("title", "description", "price") VALUES($1, $2, $3) RETURNING id', [title, description, price])
        await client.query('INSERT INTO stocks("product_id", "count") VALUES ($1, $2)', [rows[0].id, count])
        await client.query('COMMIT')
        return rows[0].id
    } catch (e) {
        await client.query('ROLLBACK')
        throw e
    } finally {
        await client.end()
    }
}
