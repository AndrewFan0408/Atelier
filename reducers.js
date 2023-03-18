const initialState = {
  answers: {},
  questions: [],
  numberOfQuestions: 2,
  product: {},
  loading: true,
  productId: '',
};

const answerListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_QUESTIONS_SUCCESS':
      return { ...state, questions: action.questions, answers: action.answers };
    case 'SHOW_MORE_QUESTIONS':
      return { ...state, numberOfQuestions: state.questions.length };
    case 'SHOW_LESS_QUESTIONS':
      return { ...state, numberOfQuestions: 2 };
    case 'SHOW_MORE_ANSWERS':
      return { ...state, numberOfAnswers: Object.values(state.answers).length };
    case 'SHOW_LESS_ANSWERS':
      return { ...state, numberOfAnswers: 2 };
    case 'FETCH_PRODUCTS_SUCCESS':
      return {...state, product: action.product, productId: action.product.id, loading: false}
    case 'FETCH_PRODUCTS_FAILURE':
      return {...state, product: action.product, loading: false}
    default:
      return state;
  }
};

export default answerListReducer;