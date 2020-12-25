import chechPropTypes from 'check-prop-types'

export function findByTestAtrr(wrapper, val) {
  return wrapper.find(`[data-test="${val}"]`)
}

export function checkProps(component, conformingProps) {
  const propError = chechPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  )
  expect(propError).toBeUndefined()
}