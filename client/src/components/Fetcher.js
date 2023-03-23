import axios from 'axios';

export default () => (dispatch) => {
  axios.get(
    'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products?count=1',
    {
      headers: { Authorization: process.env.AUTH_SECRET },
    },
  )
    .then((response) => {
      dispatch({
        type: 'FETCH_PRODUCTS_SUCCESS',
        product: response.data[0],
      });

      dispatch({
        type: 'GET_O_PRODUCTS_SUCCESS',
        product: response.data[0],
      });
      console.log(response.data);
      return response.data[0].id;
    })
    .then((productId) => {
      axios.get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions?product_id=${40435}`,
        {
          headers: { Authorization: process.env.AUTH_SECRET },
        },
      )
        .then((response) => {
          console.log('this is my response\n', response);
          dispatch({
            type: 'GET_QUESTIONS_SUCCESS',
            questions: response.data.results,
            answers: response.data.results.answers,
          });
        })
        .catch((err) => {
          console.log('err fetching questions\n', err);
        });

      axios.get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}/styles`,
        {
          headers: { Authorization: process.env.AUTH_SECRET },
        },
      )
        .then((response) => {
          dispatch({
            type: 'GET_O_STYLES_SUCCESS',
            styles: response.data.results,
          });
        })
        .catch((err) => {
          console.log('err fetching styles\n', err);
        });

      axios.get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta?product_id=${productId}`,
        {
          headers: { Authorization: process.env.AUTH_SECRET },
        },
      )
        .then((response) => {
          dispatch({
            type: 'GET_O_RATINGS_SUCCESS',
            ratings: response.data.ratings,
          });
        })
        .catch((err) => {
          console.log('err fetching ratings\n', err);
        });

      axios.get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}/related`,
        {
          headers: { Authorization: process.env.AUTH_SECRET },
        },
      )
        .then((response) => {
          dispatch({
            type: 'GET_IDS_SUCCESS',
            relatedIds: response.data,
          });
        })
        .catch((err) => {
          console.log('err fetching related items\n', err);
        });
    })
    .catch((error) => {
      console.log('err fetching from server\n', error);

      dispatch({
        type: 'FETCH_PRODUCTS_ERROR',
        product: [],
      });

      dispatch({
        type: 'GET_O_PRODUCTS_FAILURE',
        product: {},
      });
    });
};
