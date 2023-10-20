"use client";

import { useEffect, useState } from "react";

import { register } from "@teamhanko/hanko-elements";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL || "";

const Profile = () => {
  const [openState, setOpenState] = useState(false);

  useEffect(() => {
    register(hankoApi ?? "").catch((error) => {
      throw new Error("ERROR[HANKO PROFILE]", error)
    });
  }, []);

  const openProfile = () => {
    setOpenState(!openState);
  };

  return (
    <>
      <button type="button" onClick={openProfile}>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </button>
      {openState && (
        <div className="top-14 absolute">
          <section className=" w-[450px] h-auto rounded-md bg-white shadow-md outline outline-1 p-5">
            <hanko-profile />
          </section>
        </div>
      )}
    </>
  );
};

export default Profile;
