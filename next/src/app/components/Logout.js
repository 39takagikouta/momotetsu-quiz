import { useSession, signOut } from 'next-auth/react'
import React from 'react'

export default function Logout() {
  const { data: session, status } = useSession()

  if (status === 'authenticated') {
    return (
      <div className="btn btn-ghost">
        <button onClick={() => signOut()}>ログアウト</button>
      </div>
    )
  }
  return null
}
