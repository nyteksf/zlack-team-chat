"use client";

import { useAuthActions } from "@convex-dev/auth/react";

import { Button } from "@/components/ui/button";

export default function Home() {
  const { signOut } = useAuthActions();

  return (
    <div>
      Logged the fuck in at last! WOOHOOOO!
      <Button onClick={() => signOut()}>Sign Out</Button>
    </div>
  )
}
