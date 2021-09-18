import {
    RECEIVE_USERS,
    ADD_ANSWER_TO_USER,
    ADD_QUESTION_TO_USER
  } from '../actions/users';
  
  export default function users(state = {}, action) {
    switch (action.type) {
      
      case ADD_QUESTION_TO_USER:
        const { id, author } = action;
  
        return {
          ...state,
          [author]: {
            ...state[author],
            questions: state[author].questions.concat(id)
          }
        };
      
    }
  }