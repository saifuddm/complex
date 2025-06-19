"use client";

import { useActionState } from "react";
import { login, signup } from "./actions";

type FormState = {
  error: string | null;
  fieldErrors?: {
    email?: string[];
    password?: string[];
  };
};

const initialState: FormState = {
  error: null,
};

export default function LoginPage() {
  const [loginState, loginAction] = useActionState(login, initialState);
  const [signupState, signupAction] = useActionState(signup, initialState);

  // Show error from either action
  const currentError = loginState?.error || signupState?.error;
  const currentFieldErrors =
    loginState?.fieldErrors || signupState?.fieldErrors;

  function ErrorMessage({ error }: { error: string | null }) {
    if (!error) return null;

    return (
      <div className="bg-destructive text-destructive-foreground p-2 rounded-md">
        <p>{error}</p>
      </div>
    );
  }

  function FieldError({ errors }: { errors?: string[] }) {
    if (!errors || errors.length === 0) return null;

    return (
      <div className="text-red-500 text-sm mt-1">
        {errors.map((error, index) => (
          <p key={index}>{error}</p>
        ))}
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-2 container mx-auto bg-card rounded-lg shadow-md p-4">
      <label htmlFor="email" className="text-lg">
        Email:
      </label>
      <input
        id="email"
        name="email"
        type="email"
        required
        className={`border rounded-md p-2 focus:ring-2 focus:ring-accent focus:outline-none ${
          currentFieldErrors?.email ? "border-red-500" : ""
        }`}
      />
      <FieldError errors={currentFieldErrors?.email} />

      <label htmlFor="password" className="text-lg">
        Password:
      </label>
      <input
        id="password"
        name="password"
        type="password"
        required
        className={`border rounded-md p-2 focus:ring-2 focus:ring-accent focus:outline-none ${
          currentFieldErrors?.password ? "border-red-500" : ""
        }`}
      />
      <FieldError errors={currentFieldErrors?.password} />

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
  );
}
