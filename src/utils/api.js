import {_getUsers,_getQuestions,_saveQuestion,_saveQuestionAnswer} from './_DATA';

export function getInitialData(){
    return Promise.all([_getUsers(), _getQuestions()])
    .then(
        ([users, questions]) =>({
            users: users,
            questions: questions
        })
    );
}

export function saveQuestion(qndata){
    return _saveQuestion(qndata);
}

export function saveQuestionAnswer(qndata){
    return _saveQuestionAnswer(qndata);
}