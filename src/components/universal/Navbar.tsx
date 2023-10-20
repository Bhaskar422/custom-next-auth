import Link from "next/link";
import React from "react";
import { ModeToggle } from "@/components/universal/ToggleTheme";
import { buttonVariants } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/universal/MaxWidthWrapper";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import UserAccountNav from "@/components/universal/UserAccountNav";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <header className="sticky h-14 top-0 z-30 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <MaxWidthWrapper>
        <nav className="flex h-14 items-center justify-between border-b">
          <Link href="/" className="flex font-semibold">
            Studify
          </Link>
          {/* Implement Mobile Nav bar*/}

          <div className="hidden items-center space-x-4 sm:flex">
            {session?.user ? (
              <>
                <UserAccountNav />
              </>
            ) : (
              <>
                <Link
                  href="/sign-in"
                  className={buttonVariants({ variant: "ghost", size: "sm" })}
                >
                  Sign in
                </Link>
                <Link href="/sign-up" className={buttonVariants({ size: "sm" })}>
                  Get Started
                </Link>
              </>
            )}
            <ModeToggle />
          </div>
        </nav>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
