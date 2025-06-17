'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

type FormState = {
  error: string | null;
}

export async function login(prevState: FormState, formData: FormData): Promise<FormState> {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

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
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    return {
      error: error.message || 'Sign up failed'
    }
  }

  revalidatePath('/', 'layout')
  redirect('/')
}