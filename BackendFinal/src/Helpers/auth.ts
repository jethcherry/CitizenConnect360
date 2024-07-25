import Joi from "joi";

export const RegisterShema = Joi.object({
    Name: Joi.string().required(),
    Email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required().messages({
        'string.email': "Please enter a valid email address"
    }),
    Password: Joi.string().required().pattern(
        new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$')
    ).messages({
        'string.pattern.base': 'Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character'
    }),
    
    Role: Joi.string().valid('Citizen', 'Government Official').required()
    
});


