import React from 'react'
import PropTypes from 'prop-types'

// const Congrats = (props) => {
// 	if (props.success) {
// 		return (
// 			<div data-test="component-congrats">
// 				<span data-test="component-message">
// 					Congratulations! You guessed the world!
// 				</span>
// 			</div>
// 		)
// 	} else {
// 		return <div data-test="component-congrats" />
// 	}
// }

// export const protoTypes = {
// 	success: PropTypes.bool.isRequired,
// }

/* Only a Class Component can use Component.protoTypes, 
if a Function Component, please use upper code eg: export protoTypes 
*/
class Congrats extends React.Component {
	render() {
		if (this.props.success) {
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
}

Congrats.protoTypes = {
	success: PropTypes.bool,
}
export default Congrats
