import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr, checkProps } from '../test/testUtils'
import GuessedWords from './GuessedWords'

const defaultProps = {
	guessedWords: [
		{
			guessedWord: 'train',
			letterMatchCount: 3,
		},
	],
}

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
		expect(instruction.text().length).not.toBe(0)
	})
})

describe('if there are words guessed', () => {
	let wrapper
	const guessedWords = [
		{
			guessedWord: 'train',
			letterMatchCount: 3,
		},
		{
			guessedWord: 'agile',
			letterMatchCount: 1,
		},
		{
			guessedWord: 'party',
			letterMatchCount: 5,
		},
	]
	beforeEach(() => {
		wrapper = setup({ guessedWords })
	})
	test('render without errors', () => {
		const component = findByTestAttr(wrapper, 'component-guessed-words')
		expect(component.length).toBe(1)
	})
	test('render "guessed word" section', () => {
		const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words')
		expect(guessedWordsNode.length).toBe(1)
	})
	test('correct number if guessed words', () => {
		const guessedWordsNode = findByTestAttr(wrapper, 'guessed-word')
		expect(guessedWordsNode.length).toBe(guessedWords.length)
	})
})

test('x', () => {})
