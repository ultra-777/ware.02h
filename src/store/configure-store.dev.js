import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import DevTools from '../containers/dev-tools';
import { createEpicMiddleware } from 'redux-observable';
import epics from '../actions/epics';
import 'rxjs';

export const history = createHistory();
const epicMiddleware = createEpicMiddleware(epics);

export function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(routerMiddleware(history), epicMiddleware),
            DevTools.instrument()
        )
    );
}
