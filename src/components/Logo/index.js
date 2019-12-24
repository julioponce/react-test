import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '@/assets/img/bellotero-logo.svg'
import './styles'

const Logo = () => {
  return (
    <div className="brand">
      <NavLink to="/">
        <img src={logo} />
      </NavLink>
    </div>
  )
}

export default Logo
