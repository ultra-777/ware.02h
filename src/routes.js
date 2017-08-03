import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FilterableTable from './containers/filterable-table';
import About from './components/about';

export default (
	<Switch>
		<Route exact path="/" component={FilterableTable} />
		<Route path="/about" component={About} />
	</Switch>
);
