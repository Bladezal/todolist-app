import { UserActionTypes } from "./user.types";

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});

export const toogleDoneTask = itemIdx => ({
    type: UserActionTypes.TOOGLE_TASK_DONE,
    payload: itemIdx
});

export const addTask = task => ({
    type: UserActionTypes.ADD_TASK,
    payload: task
});