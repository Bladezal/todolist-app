import { UserActionTypes } from "./user.types";
import { addItemToList, toogleDoneTask } from "./user.utils";


const INITIAL_STATE = {
  currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    case UserActionTypes.TOOGLE_TASK_DONE:
      return {
        ...state,
        currentUser: toogleDoneTask(state.currentUser, action.payload)
      }
    case UserActionTypes.ADD_TASK:
      return {
        ...state,
        currentUser: addItemToList(state.currentUser, action.payload)
      }
    default:
      return state;
  }
}

export default userReducer;