import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
        <div>
            Group users
        </div>
        <ul>
            <li><Link href="/dashboard/users/username1">User1</Link></li>
            <li><Link href="/dashboard/users/username2">User2</Link></li>
        </ul>
    </div>

  )
}

export default page