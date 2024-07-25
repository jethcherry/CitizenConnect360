import Joi from "joi";

export const ViewsSchema = Joi.object({
    Image: Joi.string().uri().optional().messages({
        'string.uri': "Image URL must be a valid URI"
    }),
    Title: Joi.string().max(255).required().messages({
        'any.required': "Title is required"
    }),
    Description: Joi.string().max(255).required().messages({
        'any.required': "Description is required"
    }),
    Date: Joi.date().required().messages({
        'date.base': "Date must be a valid date",
        'any.required': "Date is required"
    }),
    UserId: Joi.string().uuid().optional().messages({
        'string.base': "User ID must be a valid UUID",
        'string.uuid': "User ID must be a valid UUID"
    })
});

export default ViewsSchema;
