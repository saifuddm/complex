"use client";

import React from "react";
import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";

function LogoutButton() {
  const handleLogout = async () => {
    const supabase = await createClient();
    await supabase.auth.signOut();
    redirect("/");
  };
  return (
    <div className="container mx-auto py-4 text-right">
      <button
        onClick={handleLogout}
        className=" hover:underline underline-offset-4 decoration-accent px-4 py-2 border rounded-md hover:cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
}

export default LogoutButton;
