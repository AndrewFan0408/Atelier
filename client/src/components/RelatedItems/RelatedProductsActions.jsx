import axios from 'axios';

export const GET_RELATED_PRODUCTS_SUCCESS = 'GET_RELATED_PRODUCTS_SUCCESS';
export const GET_RELATED_PRODUCTS_FAILURE = 'GET_RELATED_PRODUCTS_FAILURE';

export const getRelatedProductsSuccess = (relatedProducts) => ({
  type: GET_RELATED_PRODUCTS_SUCCESS,
  relatedProducts,
});

export const getRelatedProductsFailure = (error) => ({
  type: GET_RELATED_PRODUCTS_FAILURE,
  error,
});

export const getRelatedProducts = (ids) => async (dispatch) => {
  try {
    const productRequests = ids.map((id) => axios.get(`/api/products/${id}`));
    const products = await Promise.all(productRequests);
    const relatedProducts = products.map((response) => response.data);

    dispatch(getRelatedProductsSuccess(relatedProducts));
  } catch (error) {
    dispatch(getRelatedProductsFailure(error));
  }
};
