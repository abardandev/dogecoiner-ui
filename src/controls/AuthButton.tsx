'use client'

import { useRef } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { Button } from 'primereact/button'
import { Menu } from 'primereact/menu'
import type { MenuItem } from 'primereact/menuitem'

export default function AuthButton() {
  const { data: session, status } = useSession()
  const menuRef = useRef<Menu>(null)

  if (status === 'loading') {
    return <Button label="Loading..." disabled size="small" />
  }

  if (session) {
    const menuItems: MenuItem[] = [
      {
        template: () => (
          <div className="px-4 py-3 border-b border-gray-200">
            <div className="font-semibold text-white-900">
              {session.user?.name || session.user?.email}
            </div>
            {session.user?.email && session.user?.name && (
              <div className="text-sm text-gray-400">
                {session.user.email}
              </div>
            )}
          </div>
        )
      },
      {
        label: 'Sign Out',
        icon: 'pi pi-sign-out',
        command: () => signOut()
      }
    ]

    return (
      <>
        <Menu model={menuItems} popup ref={menuRef} />
        <Button
          onClick={(e) => menuRef.current?.toggle(e)}
          className="p-0"
          text
          rounded
        >
          {session.user?.image && (
            <img
              src={session.user.image}
              alt={session.user.name || 'User'}
              className="w-8 h-8 rounded-full cursor-pointer hover:opacity-80 transition-opacity"
            />
          )}
        </Button>
      </>
    )
  }

  return (
    <Button
      label="Sign In"
      icon="pi pi-google"
      onClick={() => signIn('google')}
    />
  )
}