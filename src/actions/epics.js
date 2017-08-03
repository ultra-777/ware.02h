import ActionTypes from './types';

import {
	/*
	loadSurveySucceeded,
	loadSurveyFailed,
	applyAnswersFailed,
	applyResult,
	stopSurvey,
	finishFailed,
	*/
	stub
} from './actions';
import { combineEpics } from 'redux-observable';
import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { ajax } from 'rxjs/observable/dom/ajax';
// import { browserHistory } from 'react-router';


const GET_SURVEY_URL = '/api/v1/survey/';
const GET_SAVE_RESULTS_URL = '/api/v1/survey/';
const HEADER_APP_JSON = {'Content-Type': 'application/json'};
/*
const getSurveyEpic = action$ =>
    action$.ofType(ActionTypes.SURVEY.LOAD)
        .mergeMap(action =>
            ajax.getJSON(`${GET_SURVEY_URL}${action.id}${action.isTest ? '?test=1' : ''}`)
                .map(response => {
                	if (!response.pattern) {
                		return Obseravble.throw({message: 'not any pattern'});
					}
          return loadSurveySucceeded(response, action.isTest);
        })
      .catch(error => Observable.of(loadSurveyFailed(error)))
      ).takeUntil(action$.ofType(ActionTypes.SURVEY.LOAD_CANCELLED));

const applyAnswersEpic = action$ =>
	action$.ofType(ActionTypes.SURVEY.APPLY_ANSWERS)
		.mergeMap(action => {
			if (action.isTest) {
				return Observable.from([
					{
						id: (new Date()).getTime(),
						question: action.question,
						value: action.value,
						comment: action.comment,
						answers: action.answers,
						created_at: new Date(),
						updated_at: new Date()
					}
				])
					.map(response => applyResult(action.question, response));
			}
			else {
				return ajax.post(`${GET_SAVE_RESULTS_URL}${action.surveyId}/results/`,
					{
						answers: action.answers, // Answer[]
						comment: action.comment, // ""
						question: action.question, // Question
						value: action.value //null
					},
					HEADER_APP_JSON
				)
					.map(response => applyResult(action.question, response.response, action.moveToNextQuestion))
					.catch(error => Observable.of(applyAnswersFailed(action.question, error)));
			}
		}).takeUntil(action$.ofType(ActionTypes.SURVEY.APPLY_ANSWERS_CANCELLED));


const finishEpic = action$ =>
	action$.ofType(ActionTypes.SURVEY.FINISH)
		.mergeMap(action => {
				if (action.isTest) {
					return Observable.from([true]).map(response => stopSurvey(action.id, response))
				}
				else {
					return ajax.post(`${GET_SURVEY_URL}${action.id}/finish/`,
						{},
						HEADER_APP_JSON
					)
						.map(response => stopSurvey(action.id, response))
						.catch(error => Observable.of(finishFailed(action.id, error)))
				}
			}
		).takeUntil(action$.ofType(ActionTypes.SURVEY.FINISH_CANCELLED));

const navigateEpic = action$ =>
    action$.ofType(ActionTypes.NAVIGATE)
		.mergeMap(
			action => {
        browserHistory.push(action.url);
        return Observable.of(stub())
			}
		)
*/


export default combineEpics(
	/*
	getSurveyEpic,
	applyAnswersEpic,
	finishEpic,
	navigateEpic
	*/
);
