import Joi from "joi";

export const PollSchema = Joi.object({

    Question: Joi.string().required().messages({
        'any.required': "Question is required"
    }),
    Options: Joi.string().required().messages({
        'any.required': "Options are required"
    }),
    UserId: Joi.string().uuid().optional().messages({
        'string.base': "User ID must be a valid UUID",
        'string.uuid': "User ID must be a valid UUID"
    })
});

export default PollSchema;
