import React from 'react'
import cnames from 'classnames'
import styles from './styles'

const Title = (props) => {
  const { className } = props
  const Heading = props.level < 6 && props.level > 0
    ? `h${props.level}`
    : 'h1'
  return (
    <Heading className={cnames(styles.title, className)}>
      {props.text}
    </Heading>
  )
}

export default Title
