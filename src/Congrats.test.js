import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-17-updated'
import Congrats from './Congrats'

import { findByTestAttr, checkProps } from '../test/testUtils'

Enzyme.configure({ adapter: new EnzymeAdapter() })

const setup = (props = {}) => {
	return shallow(<Congrats {...props} />)
}

test('renders without errors', () => {
	const wrapper = setup()
	const component = findByTestAttr(wrapper, 'component-congrats')
	expect(component.length).toBe(1)
})

test('renders no test when `success` props is false', () => {
	const wrapper = setup({ success: false })
	const component = findByTestAttr(wrapper, 'component-congrats')
	expect(component.text()).toBe('')
})

test('renders no-empty congrats message when `success` props is true', () => {
	const wrapper = setup({ success: true })
	const component = findByTestAttr(wrapper, 'component-congrats')
	expect(component.text().length).not.toBe(0)
})
test('renders does not throw warning with expected props', () => {
	const expectedProps = { success: false }
	const propError = checkProps(Congrats, expectedProps)
	expect(propError).toBeUndefined()
})
