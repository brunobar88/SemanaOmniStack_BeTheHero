const knex = require('knex');
const configs = require('../../knexfile');

const config = process.env.NODE_ENV === 'test' ? configs.test : configs.development;

const connection = knex(config);

module.exports = connection;
