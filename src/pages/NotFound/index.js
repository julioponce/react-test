import React from 'react'
import styles from './styles'

const NotFound = () => {
  return (
    <div className="container">
      <div className={styles.error}>
        <div className={styles.number}>
          404
        </div>
        <div className={styles.message}>
          Pagina no encontrada
        </div>
      </div>
    </div>
  )
}

export default NotFound
