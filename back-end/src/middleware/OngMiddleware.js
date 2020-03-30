const { celebrate, Segments, Joi } = require('celebrate');

module.exports = { 
    validateSession() {
       return celebrate({
           [Segments.BODY]: Joi.object().keys({
               id: Joi.string().required()
           })
       })
    },

    validaDataOngs() {
        return celebrate({
            [Segments.BODY]: Joi.object().keys({
                name: Joi.string().required(),
                email: Joi.string().required().email(),
                whatsapp: Joi.string().required().min(10).max(11),
                city: Joi.string().required(),
                uf: Joi.string().required().length(2),
            })
        })
    },

    validaDadosProfile() {
        return celebrate({
            [Segments.HEADERS]: Joi.object({
                authorization: Joi.string().required()
            }).unknown(),
        })
    }
}