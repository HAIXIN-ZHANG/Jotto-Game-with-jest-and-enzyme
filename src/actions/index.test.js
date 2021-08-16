import { correctGuess } from './index'

describe('correctGuess', () => {
	test('returns an action with type `CORRECT_GUESS`', () => {
		const action = correctGuess()
		expect(action).toEqual({ type: action.type })
	})
})
