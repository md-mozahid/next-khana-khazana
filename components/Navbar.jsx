'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SignInOut from './auth/SignInOut'

export default function Navbar() {
  const pathname = usePathname()
  return (
    <nav>
      <div className="container flex justify-between py-6">
        <Link href="/">
          <Image
            src="/images/logo.png"
            // src={Logo}
            alt="logo"
            className="object-cover h-[40px]"
            width={125}
            height={40}
          />
        </Link>

        <ul className="flex gap-4 text-sm text-gray-500">
          <li className={`py-2 ${pathname === '/' && 'active'}`}>
            <Link href="/">Home</Link>
          </li>

          <li className={`py-2 ${pathname === '/recipes' && 'active'}`}>
            <Link href="/recipes">Recipe</Link>
          </li>

          <li className={`py-2 ${pathname === '/about' && 'active'}`}>
            <Link href="/about">About us</Link>
          </li>

          <li className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">
            <SignInOut />
          </li>
        </ul>
      </div>
    </nav>
  )
}
