import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import LogoutButton from "@/components/LogoutButton";

export default async function AccountPage() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  //   if (error || !data?.user) {
  //     redirect("/login");
  //   }
  return (
    <>
      <div className="container mx-auto p-4 bg-card rounded-lg shadow-md  ">
        <h1 className="text-2xl flex items-center gap-2 text-primary">
          Account
        </h1>
        <h2 className="text-lg mt-4">{data?.user?.email}</h2>
      </div>
      <LogoutButton />
    </>
  );
}
