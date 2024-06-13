'use client'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import Login from './Login'
import Logout from './Logout'

export default function Header() {
  const { data: session, status } = useSession()
  return (
    <div className="navbar bg-blue-500">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">桃鉄ワールドクイズ</a>
      </div>
      <div className="flex-none">
              <ul className="flex flex-row space-x-4">
                <li>
                  <Link href="/country" className='btn btn-ghost'>国旗クイズ</Link>
                </li>
                <li>
                  <Link href="/island" className='btn btn-ghost'>島クイズ</Link>
                </li>
                <li>
                  <Link href="/lake" className='btn btn-ghost'>湖クイズ</Link>
                </li>
                <li>{status === 'authenticated' ? <Logout /> : <Login />}</li>
              </ul>

      </div>
    </div>
  )
}