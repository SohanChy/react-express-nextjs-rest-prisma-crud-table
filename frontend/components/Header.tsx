import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header: React.FC = () => {
  const router = useRouter()
  const isActive: (pathname: string) => boolean =
    pathname => router.pathname === pathname

  return(
    
    <nav className="navbar navbar-light" style={{backgroundColor: "#e3f2fd"}}>
      <div className="container">
        <a className="navbar-brand" href="sohanchy.com">
          <h2>Fullstack CRUD Demo</h2>
        </a>
      </div>
    </nav>
  
  )
}

export default Header
