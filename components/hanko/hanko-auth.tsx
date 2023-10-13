"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

import { Hanko, register } from "@teamhanko/hanko-elements";

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;

const HankoAuth = () => {
  const router = useRouter();
  const [hanko, setHanko] = useState<Hanko>();

  useEffect(() => {
    import("@teamhanko/hanko-elements").then(({ Hanko }) =>
      setHanko(new Hanko(hankoApi ?? ""))
    );
  }, []);

  const redirectAfterLogin = useCallback(() => {
    router.replace("/dashboard");
  }, [router]);

  useEffect(
    () =>
      hanko?.onAuthFlowCompleted(() => {
        redirectAfterLogin();
      }),
    [hanko, redirectAfterLogin]
  );

  useEffect(() => {
    //
    register(hankoApi ?? "").catch((error) => {
        throw new Error("ERROR[HANKO AUTH]", error)
    });
  }, []);

  return (
    <div className="flex min-h-screen justify-center items-center bg-slate-50">
      <div className="bg-white p-5 rounded-2xl shadow-md">
        <hanko-auth />
      </div>
    </div>
  );
}

export default HankoAuth;