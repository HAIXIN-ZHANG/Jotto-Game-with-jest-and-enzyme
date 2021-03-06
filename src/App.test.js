import React from 'react'
import App, { UnconnectedApp } from './App'
import { shallow } from 'enzyme'
import { storeFactory } from '../test/testUtils'

const setup = (state = {}) => {
	const store = storeFactory(state)
	const wrapper = shallow(<App store={store} />)
		.dive()
		.dive()
	return wrapper
}

describe('redux properties', () => {
	test('has access to `success` state', () => {
		const success = true
		const wrapper = setup({ success })
		const successProp = wrapper.instance().props.success
		expect(successProp).toBe(success)
	})
	test('has access to `secretWord` state', () => {
		const secretWord = 'party'
		const wrapper = setup({ secretWord })
		const guessWordsProp = wrapper.instance().props.secretWord
		expect(guessWordsProp).toBe(secretWord)
	})
	test('has access to `guessedWords` state', () => {
		const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }]
		const wrapper = setup({ guessedWords })
		const guessedWordsProp = wrapper.instance().props.guessedWords
		expect(guessedWordsProp).toBe(guessedWords)
	})
	test('`getSecretWord` action creator is a function on th props', () => {
		const wrapper = setup()
		const getSecretWordProp = wrapper.instance().props.getSecretWord
		expect(getSecretWordProp).toBeInstanceOf(Function)
	})
})

test('`getSecretWord` runs on App mount', () => {
	const getSecretWordMock = jest.fn()

	const props = {
		getSecretWord: getSecretWordMock,
		success: false,
		guessedWords: [],
	}
	const wrapper = shallow(
		<UnconnectedApp getSecretWord={getSecretWordMock} {...props} />
	)
	wrapper.instance().componentDidMount()
	const getSecretWordCallCount = getSecretWordMock.mock.calls.length
	expect(getSecretWordCallCount).toBe(1)
})
