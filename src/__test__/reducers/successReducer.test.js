import { actionTypes } from '../../actions'
import successReducer from '../../reducers/successReducer'

describe("successReducer", () => {
  test("returns default initial state of `false` when no action is passed", () => {
    const newState = successReducer(undefined, {})
    expect(newState).toBe(false)
  })

  test("returns sstate of true after upon receiving an action of type `CORRECT_GUESS`", () => {
    const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS })
    expect(newState).toBe(true)
  })
})