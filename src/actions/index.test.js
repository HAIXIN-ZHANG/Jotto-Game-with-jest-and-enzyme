import { correctGuess, guessSecretWord } from './index'
import moxios from 'moxios'
import { storeFactory } from '../../test/testUtils'

describe('correctGuess', () => {
	test('returns an action with type `CORRECT_GUESS`', () => {
		const action = correctGuess()
		expect(action).toEqual({ type: action.type })
	})
})

describe('getSecretWord action creator', () => {
	beforeEach(() => {
		moxios.install()
	})
	afterEach(() => {
		moxios.uninstall()
	})
	test('add response word to state', () => {
		const secretWord = 'party'
		const store = storeFactory()

		moxios.wait(() => {
			const request = moxios.requests.mostRecent()
			request.respondWith({
				status: 200,
				response: secretWord,
			})
		})
		return store.dispatch(guessSecretWord()).then(() => {
			const newState = store.getState()
			expect(newState.secretWord).toBe(secretWord)
		})
	})
})
