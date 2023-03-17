const initialState = {
  answers: {},
  questions: [],
  numberOfQuestions: 2
};

const answerListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_QUESTIONS_SUCCESS':
      return { ...state, questions: action.questions };
    case 'GET_ANSWERS_SUCCESS':
      return { ...state, answers: action.answers };
    case 'SHOW_MORE_QUESTIONS':
      return { ...state, numberOfQuestions: Object.values(state.answers).length };
    case 'SHOW_LESS_QUESTIONS':
      return { ...state, numberOfQuestions: 2 };
    case 'SHOW_MORE_ANSWERS':
      return { ...state, numberOfAnswers: Object.values(state.answers).length };
    case 'SHOW_LESS_ANSWERS':
      return { ...state, numberOfAnswers: 2 };
    default:
      return state;
  }
};

export default answerListReducer;