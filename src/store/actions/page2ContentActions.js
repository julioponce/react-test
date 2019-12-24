import axios from 'axios'

export const GET_PAGE2_CONTENT_REQUEST = 'GET_PAGE2_CONTENT_REQUEST'
export const GET_PAGE2_CONTENT_SUCCESS = 'GET_PAGE2_CONTENT_SUCCESS'

export const getPage2Content = () => {
  return dispatch => {
    dispatch(getPage2ContentRequest())
    const page2Content = JSON.parse(window.localStorage.getItem('page2Content'))
    if (page2Content) {
      const calculator = page2Content
      dispatch(getPage2ContentSuccess(calculator))
    } else {
      axios.get(
        'https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page2.json')
        .then(({ data }) => {
          const { calculator } = data
          const titleSplitted = calculator.title.split(' ')
          const firstTitleRow = titleSplitted.slice(0, titleSplitted.length - 1).join(' ')
          const secondTitleRow = titleSplitted.slice(titleSplitted.length - 1)
          calculator.title = [firstTitleRow, secondTitleRow]
          window.localStorage.setItem('page2Content', JSON.stringify(calculator))
          dispatch(getPage2ContentSuccess(calculator))
        })
        .catch(error => {
          console.warn(error)
        })
    }
  }
}

export const getPage2ContentRequest = () => {
  return {
    type: GET_PAGE2_CONTENT_REQUEST
  }
}

export const getPage2ContentSuccess = page2Content => {
  return {
    type: GET_PAGE2_CONTENT_SUCCESS,
    payload: page2Content
  }
}
