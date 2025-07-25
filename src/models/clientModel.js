const pool = require('../config/database');

const Client = {
    async getAll() {
        const [rows] = await pool.query('SELECT * FROM clients');
        return rows;
    },

    async getById(id) {
        const [rows] = await pool.query('SELECT * FROM clients WHERE id = ?', [id]);
        return rows[0];
    },

    async create(client) {
        const { name, dniruc, phone, address } = client;
        const [result] = await pool.query(
            'INSERT INTO clients (name, dniruc, phone, address) VALUES (?, ?, ?, ?)',
            [name, dniruc, phone, address]
        );
        return { id: result.insertId, ...client };
    },

    async update(id, client) {
        const { name, dniruc, phone, address } = client;
        await pool.query(
            'UPDATE clients SET name = ?, dniruc = ?, phone = ?, address = ? WHERE id = ?',
            [name, dniruc, phone, address, id]
        );
        return { id, ...client };
    },

    async delete(id) {
        await pool.query('DELETE FROM clients WHERE id = ?', [id]);
        return true;
    }
};

module.exports = Client;