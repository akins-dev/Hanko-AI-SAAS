"use client";

import { useEffect, useState } from "react";

import { register } from "@teamhanko/hanko-elements";

import { 
  Avatar, 
  AvatarFallback, 
  AvatarImage 
} from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"


const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL || "";

const Profile = () => {
  useEffect(() => {
    register(hankoApi ?? "").catch((error) => {
      throw new Error("ERROR[HANKO PROFILE]", error)
    });
  }, []);

  return (
    <>
      <Sheet>
        <SheetTrigger>
          <button >
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>X</AvatarFallback>
            </Avatar>
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="p-4">
          <section >
            <hanko-profile />
          </section>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Profile;
