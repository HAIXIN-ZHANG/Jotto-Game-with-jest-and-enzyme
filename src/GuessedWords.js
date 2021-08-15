import React from 'react'
import PropTypes from 'prop-types'

class GuessedWords extends React.Component {
	render() {
		let contents
		if (this.props.guessedWords.length === 0) {
			contents = (
				<span data-test="guess-instructions">Try to guess some word! </span>
			)
		}
		return <div data-test="component-guessed-words">{contents}</div>
	}
}

GuessedWords.prototypes = {
	guessedWords: PropTypes.arrayOf(
		PropTypes.shape({
			guessedWord: PropTypes.string.isRequired,
			letterMatchCount: PropTypes.number.isRequired,
		})
	).isRequired,
}

export default GuessedWords
