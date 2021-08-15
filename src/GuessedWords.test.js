import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr, checkProps } from '../test/testUtils'
import GuessedWords from './GuessedWords'
import { findByAltText } from '@testing-library/react'

const defaultProps = [
	{
		guessedWords: [
			{
				guessedWords: 'train',
				letterMatchCount: 3,
			},
		],
	},
]

const setup = (props) => {
	const setupProps = { ...defaultProps, ...props }
	return shallow(<GuessedWords {...setupProps} />)
}

test('does not throw warning with expected props', () => {
	checkProps(GuessedWords, defaultProps)
})

describe('if there are no words guessed', () => {
	let wrapper
	beforeEach(() => {
		wrapper = setup({ guessedWords: [] })
	})

	test('render without errors', () => {
		const component = findByTestAttr(wrapper, 'component-guessed-words')
		expect(component.length).toBe(1)
	})
	test('render instruction to guess a word', () => {
		const instruction = findByTestAttr(wrapper, 'guessed-instruction')
		expect(instruction.text().length).toBe(0)
	})
})

describe('if there are words guessed', () => {
	test('render without errors', () => {})
})

test('x', () => {})
