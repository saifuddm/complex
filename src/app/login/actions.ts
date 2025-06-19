'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'

import { createClient } from '@/utils/supabase/server'

// Zod validation schema
const authSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
})

type FormState = {
  error: string | null;
  fieldErrors?: {
    email?: string[];
    password?: string[];
  };
}

export async function login(prevState: FormState, formData: FormData): Promise<FormState> {
  // Validate form data
  const rawData = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const validation = authSchema.safeParse(rawData)

  if (!validation.success) {
    return {
      error: null,
      fieldErrors: validation.error.flatten().fieldErrors,
    }
  }

  const supabase = await createClient()
  const { error } = await supabase.auth.signInWithPassword(validation.data)

  if (error) {
    console.error(error)
    return {
      error: error.message || 'Invalid email or password'
    }
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signup(prevState: FormState, formData: FormData): Promise<FormState> {
  // Validate form data
  const rawData = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const validation = authSchema.safeParse(rawData)

  if (!validation.success) {
    return {
      error: 'Please fix the errors',
      fieldErrors: validation.error.flatten().fieldErrors,
    }
  }

  const supabase = await createClient()
  const { error } = await supabase.auth.signUp(validation.data)

  if (error) {
    return {
      error: error.message || 'Sign up failed'
    }
  }

  revalidatePath('/', 'layout')
  redirect('/')
}