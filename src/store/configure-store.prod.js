import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import { createEpicMiddleware } from 'redux-observable';
import epics from '../actions/epics';
import 'rxjs';

export const history = createHistory();
const epicMiddleware = createEpicMiddleware(epics);

export function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(routerMiddleware(history), epicMiddleware),
    );
}
