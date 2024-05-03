'use client'
import { useFormStatus } from 'react-dom'

function Submit() {
  const { pending } = useFormStatus()
  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  )
}

async function submitForm(query) {
  await new Promise((res) => setTimeout(res, 2000))
}

export default function Form() {
  return (
    <form action={submitForm}>
      <Submit />
    </form>
  )
}
