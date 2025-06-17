"use client";

import { useActionState } from "react";
import { login, signup } from "./actions";

type FormState = {
  error: string | null;
};

const initialState: FormState = {
  error: null,
};

export default function LoginPage() {
  const [loginState, loginAction] = useActionState(login, initialState);
  const [signupState, signupAction] = useActionState(signup, initialState);

  // Show error from either action
  const currentError = loginState?.error || signupState?.error;

  function ErrorMessage({ error }: { error: string | null }) {
    if (!error) return null;

    return (
      <div className="bg-destructive text-destructive-foreground p-2 rounded-md">
        <p>{error}</p>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen font-mono">
      <form className="flex flex-col gap-2 container mx-auto bg-card rounded-lg shadow-md p-4">
        <label htmlFor="email" className="text-lg">
          Email:
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="border rounded-md p-2 focus:ring-2 focus:ring-accent focus:outline-none"
        />
        <label htmlFor="password" className="text-lg">
          Password:
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="border rounded-md p-2 focus:ring-2 focus:ring-accent focus:outline-none"
        />
        <div className="my-2 min-h-1 p-2 bg-muted rounded-md">
          <ErrorMessage error={currentError} />
        </div>
        <button
          formAction={loginAction}
          className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 hover:cursor-pointer"
        >
          Log in
        </button>
        <button
          formAction={signupAction}
          className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 hover:cursor-pointer"
        >
          Sign up
        </button>
      </form>
    </div>
  );
}
