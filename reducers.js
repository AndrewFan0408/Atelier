import { combineReducers } from 'redux'

const al_InitialState = {
  answers: {},
  questions: [],
  numberOfQuestions: 2,
  product: {},
  loading: true,
  productId: '33',
};

const ov_InitialState = {
  answers: {},
  questions: [],
  numberOfQuestions: 2,
  product: {},
  loading: true,
  productId: '33',
};

const answerListReducer = (state = al_InitialState, action) => {
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

const overviewReducer = (state = ov_InitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const combined = combineReducers({ answerListReducer, overviewReducer });

export default combined;