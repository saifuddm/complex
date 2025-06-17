"use client";

import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function AccountButton() {
  const supabase = createClient();
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  async function isLoggedIn() {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    setUser(user);
    setIsLoading(false);
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    setIsLoading(true);
    router.refresh();
  }

  useEffect(() => {
    isLoggedIn();
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="container mx-auto py-4 text-right">
        <p>Loading...</p>
      </div>
    );
  }

  if (user) {
    return (
      <div className="container mx-auto py-4 ">
        <div className="bg-primary text-primary-foreground px-4 py-1 rounded-md flex gap-2 items-center ml-auto w-fit ">
          <p>{user.email}</p>
          <button
            onClick={handleLogout}
            className=" bg-muted text-foreground px-4 py-2 border rounded-md hover:underline underline-offset-4 hover:cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-4 text-right">
      <Link
        href="/login"
        className=" hover:underline underline-offset-4 decoration-accent px-4 py-2 border rounded-md"
      >
        Login
      </Link>
    </div>
  );
}

export default AccountButton;
