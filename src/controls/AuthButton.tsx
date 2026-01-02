'use client'

import { useEffect } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { Button } from 'primereact/button'

export default function AuthButton() {
  const { data: session, status } = useSession()

  useEffect(() => {
    if (session) {
      console.log('logged in');
    }
  }, [session]);

  if (status === 'loading') {
    return <Button label="Loading..." disabled size="small" />
  }

  if (session) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm hidden md:inline">
          {session.user?.name || session.user?.email}
        </span>
        {session.user?.image && (
          <img
            src={session.user.image}
            alt={session.user.name || 'User'}
            className="w-8 h-8 rounded-full"
          />
        )}
        <Button
          label="Sign Out"
          icon="pi pi-sign-out"
          onClick={() => signOut()}
          size="small"
          severity="secondary"
          text
        />
      </div>
    )
  }

  return (
    <Button
      label="Sign In with Google"
      icon="pi pi-google"
      onClick={() => signIn('google')}
      size="small"
    />
  )
}