import React from 'react'
import Header from '@/components/Header'
import styles from './styles'

const Layout = (props) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.showContent}>
        {props.children}
      </div>
    </div>
  )
}

export default Layout
