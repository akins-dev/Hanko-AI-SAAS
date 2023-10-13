"use client";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import Profile from "@/components/hanko/profile";
import Logout from "@/components/hanko/logout";

const NavBar = () => {
  return (
    <div className="flex items-center p-4">
        <Button variant="ghost" size="icon" className="md:hidden">
            <Menu />
        </Button>
        <div className="flex w-full justify-end gap-x-2">
            <Profile />
            <Logout />
        </div>
    </div>
  )
}

export default NavBar