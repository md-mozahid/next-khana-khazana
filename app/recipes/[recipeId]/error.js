"use client"; // Error components must be Client Components

import { usePathname } from "next/navigation";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  const pathname = usePathname();
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center">
      <h2>There was no recipe of this route  {pathname}</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
