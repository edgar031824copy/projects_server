import { z } from "zod";

const ProjectSchema = z.object({
  projectName: z.string().min(1),
  clientName: z.string().min(1),
  description: z.string().min(1),
});

type Product = z.infer<typeof ProjectSchema>;

export const validateData = (product: Product) => {
  return ProjectSchema.safeParse(product);
};
