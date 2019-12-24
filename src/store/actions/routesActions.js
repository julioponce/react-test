import axios from 'axios'

export const GET_ROUTES_REQUEST = 'GET_ROUTES_REQUEST'
export const GET_ROUTES_SUCCESS = 'GET_ROUTES_SUCCESS'

export const getRoutes = () => {
  return dispatch => {
    dispatch(getRoutesRequest())
    const routes = JSON.parse(window.localStorage.getItem('routes'))
    if (routes) {
      dispatch(getRoutesSuccess(routes))
    } else {
      axios.get(
        'https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/app.json')
        .then(({ data }) => {
          const routes = data.menu.items
          window.localStorage.setItem('routes', JSON.stringify(routes))
          dispatch(getRoutesSuccess(routes))
        })
        .catch(error => {
          console.warn(error)
        })
    }
  }
}

export const getRoutesRequest = () => {
  return {
    type: GET_ROUTES_REQUEST
  }
}

export const getRoutesSuccess = routes => {
  return {
    type: GET_ROUTES_SUCCESS,
    payload: routes
  }
}
