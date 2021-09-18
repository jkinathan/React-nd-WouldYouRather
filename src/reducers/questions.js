import {    ADD_QUESTION  } from '../actions/questions';
  
  export default function questions(state = {}, action) {
    switch (action.type) {
      
      case ADD_QUESTION:
        const { question } = action;
  
        return {
          ...state,
          [question.id]: question
        };
      
    }
  }