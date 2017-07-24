import Actions from './action-types';

/*
export function loadSurvey(id, isTest) {
    return {
        type: Actions.SURVEY.LOAD,
        id,
	      isTest
    }
}

export function cancelLoading() {
    return {
        type: Actions.SURVEY.LOAD_CANCELLED
    }
}

export function loadSurveySucceeded(data, isTest) {
    return {
        type: Actions.SURVEY.LOAD_SUCCEEDED,
        data,
	      isTest
    }
}

export function loadSurveyFailed(error) {
    return {
        type: Actions.SURVEY.LOAD_FAILED,
        error,
    }
}
*/

export function stub() {
    return {
        type: Actions.STUB
    }
}

export function navigate(url, method, content) {
    return {
        type: Actions.NAVIGATE,
        url,
        method
    }
}


export default {
	/*
	loadSurvey,
	*/
	stub,
	navigate
};
