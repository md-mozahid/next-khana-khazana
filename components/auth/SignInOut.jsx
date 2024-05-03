'use client'

import { useAuth } from '@/app/hooks/useAuth'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export default function SignInOut() {
  const { auth, setAuth } = useAuth()
  const router = useRouter()

  const logout = () => {
    toast.success('Logout successfully done.',)
    setAuth(null)
    router.push('/login')
  }

  return (
    <div>
      {auth ? (
        <>
          <span className="mx-2">
            {auth?.firstName} {auth?.lastName}
          </span>
          <span className="mx-1">|</span>
          <a className="cursor-pointer" onClick={() => logout()}>
            Logout
          </a>
        </>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  )
}
