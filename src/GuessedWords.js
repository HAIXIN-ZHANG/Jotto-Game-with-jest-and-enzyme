import React from 'react'
import PropTypes from 'prop-types'

class GuessedWords extends React.Component {
	render() {
		let contents
		if (this.props.guessedWords.length === 0) {
			contents = (
				<span data-test="guessed-instruction">
					Try to guess the secret word!
				</span>
			)
		} else {
			const guessedWordRows = this.props.guessedWords.map((word, index) => {
				return (
					<tr data-test="guessed-word" key={index}>
						<td>{word.guessedWord}</td>
						<td>{word.letterMatchCount}</td>
					</tr>
				)
			})

			contents = (
				<div data-test="guessed-words">
					<h3> Guessed Words</h3>
					<table className="table table-sm">
						<thead className="thead-light">
							<tr>
								<th>Guess</th>
								<th>Matching Letter</th>
							</tr>
						</thead>
						<tbody>{guessedWordRows}</tbody>
					</table>
				</div>
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
