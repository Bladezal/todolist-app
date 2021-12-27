import { updateTodoList } from "../../firebase/firebase.utils";

export const addItemToList = (currentUser, item) => {
    const {todoList} = currentUser
    currentUser.todoList = [...todoList, {id: todoList.length, task:item, done:false}];
    updateTodoList(currentUser);
    return currentUser;
};

export const toogleDoneTask = (currentUser, itemIdx) => {
    currentUser.todoList[itemIdx].done = !currentUser.todoList[itemIdx].done;
    updateTodoList(currentUser);
    return currentUser;
};