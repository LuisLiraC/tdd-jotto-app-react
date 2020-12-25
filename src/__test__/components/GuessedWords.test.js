import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAtrr, checkProps } from '../../../test/testUtils'
import GuessedWords from '../../components/GuessedWords'

const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }]
}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<GuessedWords {...setupProps} />)
}

test('does not throw warning with expected props', () => {
  checkProps(GuessedWords, defaultProps)
})

describe('if there are no words guessed', () => {
  let wrapper
  beforeEach(() => wrapper = setup({ guessedWords: [] }))

  test('renders without error', () => {
    const component = findByTestAtrr(wrapper, 'component-guessed-words')
    expect(component.length).toBe(1)
  })

  test('renders intructions to guess a word', () => {
    const instructions = findByTestAtrr(wrapper, 'guess-instructions')
    expect(instructions.text().length).not.toBe(0)
  })
})

describe('if there are words guessed', () => {

})
