import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import styles from './styles'

const Nav = (props) => {
  const { routes } = useSelector(state => state.routes)
  const { location } = props
  const isActive = (path) => path === location.pathname

  return (
    <nav className={styles.nav}>
      <ul>
        {
          routes.map((item, index) => (
            <li key={index}>
              <NavLink
                className={styles.link}
                to={`/${item.route}`}
                activeClassName={styles.active}
                isActive={() => isActive(`/${item.route}`)}
              >
                {item.text}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default withRouter(Nav)
