import React, { useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getRoutes } from '@/store/actions/routesActions'
import Layout from '@/components/Layout'
import Page1 from '@/pages/Page1'
import Page2 from '@/pages/Page2'
import NotFound from '@/pages/NotFound'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRoutes())
  }, [])

  return (
    <Route path='/'>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Redirect to="/page-1" />
          </Route>
          <Route path='/page-1' component={Page1} />
          <Route path='/page-2' component={Page2} />
          <Route path='/404' component={NotFound} />
          <Redirect to='/404' />
        </Switch>
      </Layout>
    </Route>
  )
}

export default App
