import React from 'react'
import styles from './styles'

const EstimatedValue = (props) => {
  const { value, label } = props
  return (
    <div className={styles.estimated}>
      <div className={styles.quantity}>
        <span className={styles.currency}>
          $
        </span>
        <span className={styles.value}>
          {value}
        </span>
      </div>
      <span className={styles.label}>
        {label}
      </span>
    </div>
  )
}

export default EstimatedValue
