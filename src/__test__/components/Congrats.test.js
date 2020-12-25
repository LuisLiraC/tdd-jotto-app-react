import React from 'react'
import { shallow } from 'enzyme'
import 'jest-enzyme'

import Congrats from '../../components/Congrats'
import { findByTestAtrr, checkProps } from '../../../test/testUtils'

const setup = (props = {}) => shallow(<Congrats {...props} />)

test('renders without errors', () => {
  const wrapper = setup({ success: false })
  const component = findByTestAtrr(wrapper, 'component-congrats')
  expect(component.length).toBe(1)
})

test('renders no text when `success` prop is false', () => {
  const wrapper = setup({ success: false })
  const component = findByTestAtrr(wrapper, 'component-congrats')
  expect(component.text()).toBe('')
})

test('renders non-empty congrats message when `success` prop is true', () => {
  const wrapper = setup({ success: true })
  const message = findByTestAtrr(wrapper, 'congrats-message')
  expect(message.text().length).not.toBe(0)
})

test('does not throw warning with expected props', () => {
  const expectedProps = { success: false }
  checkProps(Congrats, expectedProps)
})