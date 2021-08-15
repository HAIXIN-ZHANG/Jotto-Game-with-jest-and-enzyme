import React from 'react'

const CongratsComponent = (props) => {
	if (props.success) {
		return (
			<div data-test="component-congrats">
				<span data-test="component-message">
					Congratulations! You guessed the world!
				</span>
			</div>
		)
	} else {
		return <div data-test="component-congrats" />
	}
}

export default CongratsComponent
