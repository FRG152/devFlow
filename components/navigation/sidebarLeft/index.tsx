import Link from "next/link";
import { LogIn, LogOut } from "lucide-react";
import ROUTES from "@/constants/routes";
import { auth, signOut } from "@/auth";
import SidebarLeftLinks from "./SidebarLeftLinks";
import { Button } from "@/components/ui/button";

const SidebarLeft = async () => {
  const session = await auth();

  return (
    <div className="sidebar-container">
      <div className="sidebar-content">
        <SidebarLeftLinks />
        <>
          {session && session.user ? (
            <>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: ROUTES.SIGN_IN });
                }}
                className="w-full flex items-center cursor-pointer gap-4"
              >
                <Button
                  variant="ghost"
                  className="w-full flex items-center cursor-pointer gap-4"
                >
                  <LogOut />
                  <p className="hidden lg:block">Logout</p>
                </Button>
              </form>
            </>
          ) : (
            <div className="flex flex-col gap-2">
              <Link href={ROUTES.SIGN_IN} className="text-center">
                <Button
                  variant="ghost"
                  className="w-full flex items-center cursor-pointer gap-4"
                >
                  Sign In
                </Button>
              </Link>
              <Link href={ROUTES.SIGN_UP} className="text-center">
                <Button
                  variant="ghost"
                  className="w-full flex items-center cursor-pointer gap-4"
                >
                  Sign Up
                </Button>
              </Link>
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default SidebarLeft;
