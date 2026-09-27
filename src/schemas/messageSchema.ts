import {z} from 'zod';

export const messageSchema = z.object({
    content: z
    .string()
    .min(8, {message: "Content must be atleast 8 characters"})
    .max(350, {message: "Content must not exceed 350 characters"})

})