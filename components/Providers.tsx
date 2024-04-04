"use client";

import { SessionProvider } from "next-auth/react";

//nextauth provider, wrap the hole app in layout.tsx

const NextAuthProvider = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextAuthProvider;
