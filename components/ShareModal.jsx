"use client";

import { Facebook, Twitter, Instagram, Linkedin } from "@/constant/images";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ShareModal() {
  const [close, setClose] = useState(false);
  return (
    <>
      {!close && (
        <>
          <div className="bg-black bg-opacity-70 size-full top-0 left-0 absolute z-10"></div>
          <div className="py-5 flex flex-grow items-center justify-center absolute z-10 left-[40%]">
            <div className="rounded-lg bg-slate-500 p-8 text-center shadow-xl w-[400px] m-auto">
              <div className="flex items-center justify-center gap-6">
                <button className="p-4 rounded-md bg-sky-600">
                  <Link href="https://facebook.com" target="_blank">
                    <Image src={Facebook} alt="facebook" />
                  </Link>
                </button>
                <button className="p-4 rounded-md bg-sky-600">
                  <Link href="https://twitter.com/" target="_blank">
                    <Image src={Twitter} alt="facebook" />
                  </Link>
                </button>
                <button className="p-4 rounded-md bg-sky-600">
                  <Link href="https://instagram.com" target="_blank">
                    <Image src={Instagram} alt="facebook" />
                  </Link>
                </button>
                <button className="p-4 rounded-md bg-sky-600">
                  <Link href="https://linkedin.com/" target="_blank">
                    <Image src={Linkedin} alt="facebook" />
                  </Link>
                </button>
              </div>
              <div className="flex justify-end space-x-5 mt-5 absolute top-6 right-3">
                <button
                  className="text-white hover:text-red-600 text-xl"
                  onClick={() => setClose(true)}
                >
                  X
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
