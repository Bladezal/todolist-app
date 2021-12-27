import React from "react";
import { connect } from "react-redux";
import { addTask } from "../../redux/user/user.actions";

import './add-task.styles.scss';

import FormInput from "../../components/form-input/form-input.component";

const AddTaskToList = (({ addTask, handleChange, ...otherProps }) => {
  const {task} = otherProps;
  return (
    <div className="add-task">
      <FormInput
        type="text"
        name="task"
        value={task}
        handleChange={(e) => { handleChange(e.target.value) }}
        onKeyDown={(e) => {if(e.key === 'Enter'){addTask(task); handleChange('');}}}
        label='New Task to Add to List' />
      
    </div>
  );
});

const mapDispatchToProps = dispatch => ({
  addTask: task => dispatch(addTask(task))
});
export default connect(null, mapDispatchToProps)(AddTaskToList);
