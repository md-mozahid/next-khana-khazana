'use client'

import { performLogin } from '@/app/actions'
import { useAuth } from '@/app/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'
import { useFormStatus } from 'react-dom'
import { toast } from 'sonner'

export default function LoginForm() {
  const [error, setError] = useState('')
  const { setAuth } = useAuth()
  const router = useRouter()
  const formRef = useRef(null)

  async function submitForm(formData) {
    try {
      const found = await performLogin(formData)
      if (found) {
        setAuth(found)
        router.push('/')
        toast.success('Login successfully done.')
        formRef.current.reset()
      } else {
        setError('Please provide a valid login credential')
      }
    } catch (error) {
      setError(error.message)
    }
  }

  // use form status hook
  function Button() {
    const { pending } = useFormStatus()
    return (
      <button
        disabled={pending}
        type="submit"
        className={`${
          pending ? 'bg-slate-500' : 'bg-[#eb4a36]'
        } py-3 rounded-md text-white w-full mt-4`}>
        {pending ? 'Logging...' : 'Login'}
      </button>
    )
  }

  return (
    <>
      <div className="my-2 text-red-500">{error}</div>
      <form className="login-form" ref={formRef} action={submitForm}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <Button />
      </form>
    </>
  )
}
