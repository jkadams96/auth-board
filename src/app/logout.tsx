"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem("auth");
    router.replace("/");
  }, [router]);

  return <p>Logging out...</p>;
}
