import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from '@/components/App'
import store from '@/store'
import styles from './styles'

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App className={styles.app} />
      </BrowserRouter>
    </Provider>
  )
}

export default Root
