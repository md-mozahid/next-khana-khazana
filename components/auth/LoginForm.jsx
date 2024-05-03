'use client'

import { performLogin } from '@/app/actions'
import { useAuth } from '@/app/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'

export default function LoginForm() {
  const [error, setError] = useState('')
  const { setAuth } = useAuth()
  const router = useRouter()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      const formData = new FormData(e.currentTarget)
      const found = await performLogin(formData)
      if (found) {
        setAuth(found)
        toast.success('Login successfully done.')
        router.push('/')
      } else {
        setError('Please provide a valid login credential')
      }
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <>
      <div className="my-2 text-red-500">{error}</div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button
          type="submit"
          className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4">
          Login
        </button>
      </form>
    </>
  )
}
