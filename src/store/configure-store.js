import {createStore, applyMiddleware, compose} from 'redux';
import createLogger from 'redux-logger'
import rootReducer from '../reducers';
import 'rxjs';
import { createEpicMiddleware } from 'redux-observable';
import epics from '../actions/epics';

const epicMiddleware = createEpicMiddleware(epics);
const isProduction = (process.env.NODE_ENV === 'production');

const configureStore = (preloadedState) => {
	const store = createStore(
		rootReducer,
		preloadedState,
		isProduction ?
			applyMiddleware(epicMiddleware)
			: compose(
				applyMiddleware(epicMiddleware, createLogger())
			)
	);

	if (!isProduction && module.hot) {
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers').default;
			store.replaceReducer(nextRootReducer);
		});
	}

	return store;
};

export default configureStore;


