import { combineReducers } from 'redux';
import authUser from '../reducers/authedUser';
import questions from '../reducers/questions';
import users from '../reducers/users';


export default combineReducers({
    authUser,
    questions,
    users,
})