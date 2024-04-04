"use client";

import Image from "next/image";
import React from "react";
import { signIn } from "next-auth/react";

const SignInBtn = () => {
  return (
    <>
      <h1 className="text-center mt-8">Sign in</h1>
      <div className="mt-4 p-4 flex flex-col items-center justify-center gap-4">
        <button
          onClick={() => signIn("github")}
          className="flex items-center border p-4 rounded-full gap-4 hover:bg-slate-100/25"
        >
          <span className="flex items-center gap-2">
            <Image src={"/github-logo.svg"} alt="/" width={30} height={30} />
            Sign In with GitHub
          </span>
        </button>
        <button
          onClick={() => signIn("google")}
          className="flex items-center border p-4 rounded-full gap-4 hover:bg-slate-100/25"
        >
          <span className="flex items-center gap-2">
            <Image src={"/google-logo.svg"} alt="/" width={30} height={30} />
            Sign In with Google
          </span>
        </button>
      </div>
    </>
  );
};

export default SignInBtn;
