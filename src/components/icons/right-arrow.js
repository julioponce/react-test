import React from 'react'
import cnames from 'classnames'
import Icon from '@/components/Icon'
import rightArrow from 'assets/icons/right-arrow'
import styles from './styles'

export const RightArrowIcon = (props) => {
  const { className, ...restProps } = props

  return (
    <Icon
      className={cnames(styles.rightArrow, className)}
      href={rightArrow}
      {...restProps}
    />
  )
}

export default RightArrowIcon
