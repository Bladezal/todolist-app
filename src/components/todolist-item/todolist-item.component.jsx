import React from "react";
import { connect } from "react-redux";
import { toogleDoneTask } from "../../redux/user/user.actions";
import FormInput from "../form-input/form-input.component";

const TodoListItem = ({item, toogleDoneTask}) => {
  
  return (
    <div className="todolist-item">
      <FormInput 
      type="checkbox" 
      name={`task_${item.id}`} 
      value={!item.done} 
      onClick={() => toogleDoneTask(item.id)} 
      label={item.task} />
      
    </div>
  )
};


const mapDispatchToProps = dispatch => ({
  toogleDoneTask: idx => dispatch(toogleDoneTask(idx))
});
export default connect(null, mapDispatchToProps)(TodoListItem);