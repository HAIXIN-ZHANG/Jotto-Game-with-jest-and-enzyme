import React from 'react'
import { connect } from 'react-redux'
import { guessWord } from './actions'
export class UnconnectedInput extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			currentGuess: '',
		}
		this.inputBox = React.createRef()
		this.submitGuessedWord = this.submitGuessedWord.bind(this)
	}

	submitGuessedWord(e) {
		e.preventDefault()
		const guessedWord = this.inputBox.current.value

		if (guessedWord && guessedWord.length > 0) {
			this.props.guessWord(guessedWord)
		}
		this.inputBox.current.value = ''
	}
	render() {
		const contents = this.props.success ? null : (
			<form className="form-inline">
				<input
					ref={this.inputBox}
					data-test="input-box"
					className="mb-2 mx-sm-3"
					id="word-guess"
					type="text"
					placeholder="enter guess"
					onChange={(e) => this.setState({ currentGuess: e.target.value })}
				/>
				<button
					data-test="submit-button"
					className="btn btn-primary mb-2"
					type="submit"
					Submit
					onClick={this.submitGuessedWord}
				>
					Submit
				</button>
			</form>
		)

		return <div data-test="component-input">{contents}</div>
	}
}

const mapStateToProps = ({ success }) => {
	return { success }
}

export default connect(mapStateToProps, { guessWord })(UnconnectedInput)
