export function findByTestAtrr(wrapper, val) {
  return wrapper.find(`[data-test="${val}"]`)
}
