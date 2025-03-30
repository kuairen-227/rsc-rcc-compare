import { z } from "zod";

export const GetPostSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  body: z.string(),
});

export type GetPost = z.infer<typeof GetPostSchema>;
