import React from 'react'
import cnames from 'classnames'
import Icon from '@/components/Icon'
import leftArrow from 'assets/icons/left-arrow'
import styles from './styles'

const LeftArrowIcon = (props) => {
  const { className, ...restProps } = props

  return (
    <Icon
      className={cnames(styles.leftArrow, className)}
      href={leftArrow}
      {...restProps}
    />
  )
}

export default LeftArrowIcon
