import React from 'react'
import Logo from '@/components/Logo'
import Nav from '@/components/Nav'
import styles from './styles'

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <Nav />
    </div>
  )
}

export default Header
