"use client";

import { signIn, signOut } from "next-auth/react";

const btnStyle =
  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
export function LoginButton() {
  return (
    <button className={btnStyle} onClick={() => signIn()}>
      Login
    </button>
  );
}

export function LogoutButton() {
  return (
    <button className={btnStyle} onClick={() => signOut()}>
      Logout
    </button>
  );
}
