import { combineReducers } from 'redux';
import authedUser from '../reducers/authedUser';
import questions from '../reducers/questions';
import users from '../reducers/users';


export default combineReducers({
    authedUser:authedUser,
    questions:questions,
    users:users
})