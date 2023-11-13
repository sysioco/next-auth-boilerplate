"use client";

import { useSession } from "next-auth/react";

export function User() {
  const { data: session } = useSession();
  console.info("GET CLIENT SESSION", { authenticated: session });
  return <pre>{JSON.stringify(session)}</pre>;
}
