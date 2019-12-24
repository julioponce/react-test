import React from 'react'
import './style'

const Icon = (props) => {
  const { className, href } = props

  return (
    <svg className={className} >
      <use href={href} />
    </svg>
  )
}

export default Icon
