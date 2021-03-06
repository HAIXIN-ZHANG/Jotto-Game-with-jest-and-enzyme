import './App.css'
import React from 'react'
import GuessedWords from './GuessedWords'
import Congrats from './Congrats'
import { connect } from 'react-redux'
import { getSecretWord } from './actions'
import Input from './Input'
export class UnconnectedApp extends React.Component {
	componentDidMount() {
		this.props.getSecretWord()
	}
	render() {
		return (
			<div className="container">
				<h1>Jotto Game</h1>
				<div>the secret word is {this.props.secretWord}</div>
				<Congrats success={this.props.success} />
				<Input />
				<GuessedWords guessedWords={this.props.guessedWords} />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	const { success, guessedWords, secretWord } = state
	return { success, guessedWords, secretWord }
}

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp)
