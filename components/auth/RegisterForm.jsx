'use client'

import { registerUser } from '@/app/actions'
import { useFormStatus } from 'react-dom'

export default function RegisterForm() {
  
  const Button = () => {
    const { pending } = useFormStatus()
    return (
      <button
        disabled={pending}
        type="submit"
        className={`${
          pending ? 'bg-slate-500' : 'bg-[#eb4a36]'
        }  py-3 rounded-md text-white w-full mt-4`}>
        {pending ? 'Creating Account...' : 'Create Account'}
      </button>
    )
  }
  return (
    <form className="login-form" action={registerUser}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" id="firstName" />
      </div>

      <div>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" id="lastName" />
      </div>
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
  )
}
