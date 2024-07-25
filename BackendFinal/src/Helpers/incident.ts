import Joi from "joi";

export const IncidentSchema = Joi.object({
    
    Image: Joi.string().uri().optional().messages({
        'string.uri': "Image URL must be a valid URI"
    }),
    Title: Joi.string().required().messages({
        'any.required': "Title is required"
    }),
    Location: Joi.string().required().messages({
        'any.required': "Location is required"
    }),
    Description: Joi.string().optional().messages({
        'any.required':"Descripiton is Required"
    }),
    Date: Joi.date().required().messages({
        'date.base': "Date must be a valid date",
        'any.required': "Date is required"
    }),
    Author: Joi.string().required().messages({
        
        'any.required': "Author is required"
    }),
   
});

export default IncidentSchema;
