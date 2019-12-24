import axios from 'axios'

export const GET_PAGE1_CONTENT_REQUEST = 'GET_PAGE1_CONTENT_REQUEST'
export const GET_PAGE1_CONTENT_SUCCESS = 'GET_PAGE1_CONTENT_SUCCESS'
export const SET_SLIDE = 'SET_SLIDE'

export const getPage1Content = () => {
  return dispatch => {
    dispatch(getPage1ContentRequest())
    const page1Content = JSON.parse(window.localStorage.getItem('page1Content'))
    if (page1Content) {
      const slider = page1Content
      dispatch(getPage1ContentSuccess(slider))
    } else {
      axios.get(
        'https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page1.json')
        .then(({ data }) => {
          const { slider } = data
          window.localStorage.setItem('page1Content', JSON.stringify(slider))
          dispatch(getPage1ContentSuccess(slider))
        })
        .catch(error => {
          console.warn(error)
        })
    }
  }
}

export const getPage1ContentRequest = () => {
  return {
    type: GET_PAGE1_CONTENT_REQUEST
  }
}

export const getPage1ContentSuccess = testimonial => {
  return {
    type: GET_PAGE1_CONTENT_SUCCESS,
    payload: testimonial
  }
}

export const setSlide = (index) => {
  return {
    type: SET_SLIDE,
    payload: index
  }
}
