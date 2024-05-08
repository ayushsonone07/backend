const {z, ParseStatus} = require("zod");

const signUpSchema = z.object({
    username: z
    .string({required_error: "Name is required"})
    .trim()
    .min(3, {message : "atleas of 3 charecters"})
    .max(255, {message : "atmost of 255 charecters"}),
    
    email: z
    .string({required_error: "Name is required"})
    .trim()
    .email({message : "Please enter a valid email"})
    .min(3, {message : "email atleas of 3 charecters"})
    .max(255, {message : "email atmost of 255 charecters"}),
    
    phone: z
    .string({required_error: "Name is required"})
    .trim()
    .min(10, {message : "Phone no. atleast of 10 charecters"})
    .max(20, {message : "Phone no. atmost of 20 charecters"}),

    password: z
    .string({required_error: "Password is required"})
    .min(6, {message : "Password atleas of 6 charecters"})
    .max(255, {message : "Password atmost of 255 charecters"}),
});

const loginSchema = z.object({
    email: z
    .string({required_error: "Name is required"})
    .trim()
    .email({message : "Please enter a valid email"})
    .min(3, {message : "email atleas of 3 charecters"})
    .max(255, {message : "email atmost of 255 charecters"}),
    
    password: z
    .string({required_error: "Password is required"})
    .min(6, {message : "Password atleas of 6 charecters"})
    .max(255, {message : "Password atmost of 255 charecters"}),    
});

module.exports = {signUpSchema, loginSchema};
