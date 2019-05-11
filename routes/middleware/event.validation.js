import Joi from 'joi';

const create = (req, res, next) => {
    const eventSchema = {
        type: Joi.string().required(),
        day: Joi.number().required(),
        month: Joi.number().required(),
        year: Joi.number(),
        target: Joi.string().required(),
        phonenumber: Joi.string().required(),
        country: Joi.string().required(),
        notificationTime: Joi.number().required(),
        message: Joi.string(),
    };

    const result = Joi.validate(req.body, eventSchema);
    if (!result.error) {
        return next();
    }
    return res.status(400).json({
        status: 400,
        message: result.error.details[0].message.replace(/[^a-zA-Z0-9 ]/g, ''),
    });
}

export default create;