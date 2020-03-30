const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
    validaNumberPaginacao() {
        return celebrate({
            [Segments.QUERY]: Joi.object().keys({
                page: Joi.number(),
            })
        })
    },

    validateDataIncidents() {
        return celebrate({
            [Segments.HEADERS]: Joi.object({
                authorization: Joi.string().required()
            }).unknown(),
            [Segments.BODY]: Joi.object().keys({
                title: Joi.string().required(),
                description: Joi.string().max(250).required(),
                value: Joi.number().required(),
            })
        })
    },

    validateDeleteIncidents() {
        return celebrate({
            [Segments.PARAMS]: Joi.object().keys({
                id: Joi.number().required()
            })
        })
    }

}