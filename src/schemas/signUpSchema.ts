import {email, z} from 'zod';

export const usernameValidation = z
                    .string()
                    .min(4,"Username must be atleast 4 characters")
                    .max(20, "Username must not exceed 20 characters")
                    .regex(/^[a-zA-Z0-9]+$/, "Username cannot contain special characters")


export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: "Invalid email address"}),
    password: z.string().min(4,{message: "Password must be atleast 4 characters"})
})