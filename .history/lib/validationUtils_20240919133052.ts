import { z } from 'zod';

export const vendorSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name must be 100 characters or less'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number'),
  address: z.string().min(1, 'Address is required').max(200, 'Address must be 200 characters or less'),
});

export const noteSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100, 'Title must be 100 characters or less'),
  content: z.string().min(1, 'Content is required').max(1000, 'Content must be 1000 characters or less'),
});

export const profileSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name must be 100 characters or less'),
  bio: z.string().max(500, 'Bio must be 500 characters or less').optional(),
  company: z.string().max(100, 'Company name must be 100 characters or less').optional(),
});

export function validateInput<T>(schema: z.ZodSchema<T>, data: unknown): { success: true; data: T } | { success: false; error: string } {
  const result = schema.safeParse(data);
  if (result.success) {
    return { success: true, data: result.data };
  } else {
    const errorMessage = result.error.errors.map(err => `${err.path.join('.')}: ${err.message}`).join(', ');
    return { success: false, error: errorMessage };
  }
}