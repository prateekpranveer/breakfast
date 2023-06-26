import React from 'react'
import Link from 'next/link'

const SidebarMenu = () => {
  return (
    <div>
        <div>
            <Link href='/streaks'>Older Streaks!</Link>
        </div>
    </div>
  )
}

export default SidebarMenu