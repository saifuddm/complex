import AccountButton from "@/components/AccountButton";
import { LayoutTemplateIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen font-mono">
      {/* Info Card */}
      <div className="container mx-auto p-4 bg-card rounded-lg shadow-md  ">
        <h1 className="text-2xl flex items-center gap-2 text-primary">
          Complex Template{" "}
          <span className="bg-muted rounded-md p-1">
            <LayoutTemplateIcon />
          </span>
        </h1>
        <h2 className="text-lg mt-4">Stack:</h2>
        <ul className="list-disc list-inside">
          <li>Next.js</li>
          <li>Tailwind CSS + Lucide Icons</li>
          <li>Supabase</li>
        </ul>
        <h3 className="text-sm text-right text-accent">
          Created with 💖 by{" "}
          <a
            className="hover:underline underline-offset-4 decoration-2"
            href="https://github.com/saifuddm"
          >
            saifuddm
          </a>
        </h3>
      </div>
      {/* Actions Card */}
      <AccountButton />
    </div>
  );
}
