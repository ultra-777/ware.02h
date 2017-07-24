import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Text } from 'react-form';
import * as PropTypes from 'prop-types';

const myForm = (
	<Form
		onSubmit={(values) => {
			console.log('Success!', values)
		}}
		validate={({ name }) => {
			return {
				name: !name ? 'A name is required' : undefined
			}
		}}>
{({submitForm}) => {
	return (
		<form onSubmit={submitForm}>
		<Text field='name' />
		<button type='submit'>Submit</button>
		</form>
)
}}
</Form>
)


class App extends React.Component {
	render() {
		return (<h1>Cheers 2</h1>);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);