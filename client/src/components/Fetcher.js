import axios from 'axios';
export const fetchProducts = () => {
  return dispatch => {
    dispatch({ type: 'FETCH_PRODUCTS_PENDING' });

    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products?count=1', {
      headers: {
        'Authorization': process.env.AUTH_SECRET
      }
    })
      .then(response => {
        dispatch({
          type: 'FETCH_PRODUCTS_SUCCESS',
          product: response.data[0]
        });
        return response.data[0].id
      })
      .then(productId => {
        axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions?product_id=${productId}`, {
          headers: {
            'Authorization': process.env.AUTH_SECRET
          }
        })
        .then(response => {
          dispatch({
            type: 'GET_QUESTIONS_SUCCESS',
            questions: response.data.results,
            answers: response.data.results.answers
          })
        })
        .catch(err => {
          console.log('err fetching questions\n', err)
        })
      })
      .catch(error => {
        console.log('err fetching from server\n', error)
        dispatch({
          type: 'FETCH_PRODUCTS_ERROR',
          product: []
        });
      });
  };
};