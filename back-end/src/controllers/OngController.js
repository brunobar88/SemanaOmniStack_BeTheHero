const connection = require('../database/conection');
const generateUniqueID = require('../utils/generateUniqueID');
module.exports = {
    async create(req, res) {
        const { name, email, whatsapp, city, uf } = req.body;
        const id = generateUniqueID();

        await connection('ongs').insert({id, name, email, whatsapp, city, uf});
        return res.json({ id });
    },

    async listAll(req, res) {
        const ongs = await connection('ongs').select('*');

        return res.json(ongs);
    }
}