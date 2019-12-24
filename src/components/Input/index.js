import React, { useState } from 'react'
import cnames from 'classnames'
import styles from './styles'

const Input = (props) => {
  const { type, size, ...restProps } = props
  const [input, setInput] = useState({})

  const onInputChange = (e) => setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value
  })

  return (
    <div className={styles['input-wrapper']}>
      <input
        className={cnames(styles.input, styles[type], styles[size])}
        onChange={onInputChange}
        {...restProps}
      />
      {
        type === 'money'
          ? (<span className={styles.dollar}>$</span>)
          : ''
      }
    </div>
  )
}

export default Input
