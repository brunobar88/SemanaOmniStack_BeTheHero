const connection = require('../database/conection');
const generateUniqueID = require('../utils/generateUniqueID');
const upperCaseString = require('../utils/UpperCaseString');
module.exports = {
    async create(req, res) {
        const { name, email, whatsapp, city } = req.body;

        const uf  = upperCaseString(req.body.uf);

        const id = generateUniqueID();

        await connection('ongs').insert({id, name, email, whatsapp, city, uf});
        return res.json({ id });
    },

    async listAll(req, res) {
        const ongs = await connection('ongs').select('*');

        return res.json(ongs);
    }
}