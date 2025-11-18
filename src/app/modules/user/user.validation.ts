import { z } from "zod";

const update_user = z.object({
    name: z.string().optional(),
})

export const user_validations = {
    update_user
}