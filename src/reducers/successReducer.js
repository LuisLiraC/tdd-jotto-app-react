import { actionTypes } from "../actions";

export default function succesReducer (state = false, action) {
  switch(action.type) {
    case (actionTypes.CORRECT_GUESS):
      return true
    default:
      return state
  }
}