import { useSession, signIn } from 'next-auth/react'
import React from 'react'

export default function Login() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (status !== 'authenticated') {
    return (
        <button className='btn btn-ghost' onClick={() => signIn('google', {}, { prompt: 'login' })}>
          Googleでログイン
        </button>
    )
  }
  return null
}
