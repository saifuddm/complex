import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

async function AccountButton() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return (
      <div className="container mx-auto py-4 ">
        <div className="bg-primary text-primary-foreground px-4 py-1 rounded-md flex gap-2 items-center ml-auto w-fit ">
          <p>{user.email}</p>
          <Link
            href="/account"
            className=" bg-muted text-foreground hover:underline underline-offset-4 decoration-accent px-4 py-2 border rounded-md"
          >
            Account
          </Link>
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
