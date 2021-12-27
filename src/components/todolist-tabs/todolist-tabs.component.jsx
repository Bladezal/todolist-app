import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";

import './todolist-tabs.styles.scss';
import TodoListItem from "../../components/todolist-item/todolist-item.component";
import AddTaskToList from "../../components/add-task/add-task.component";


const TodoListTabs = ({ user }) => {
  const { todoList } = user;
  const [currentTab, setCurrentTab] = useState(true);
  const [task, setTask] = useState('');
  const handleClick = e => setCurrentTab(!currentTab);

  return (
    <div className="TabContainer">
      <h2 className="title">TODO LIST</h2>
      <AddTaskToList task={task} handleChange={setTask} />
      <div className="tabbed_section">
        <div className="clearfix">
          <button className={currentTab ? 'active' : ''} onClick={handleClick}>ToDo</button>
          <button className={!currentTab ? 'active' : ''} onClick={handleClick}>Done</button>
        </div>
        
        <div>
          { currentTab ? 
          (<div className="tab_content">
            {(todoList && todoList.length) ?
              todoList.filter((item, idx) => !item.done).map((item) => (<TodoListItem key={item.id} item={item} />))
              : ('')
            }
          </div>) : 
          (<div className="tab_content">
            {(todoList && todoList.length) ?
              todoList.filter((item, idx) => item.done).map((item) => (<TodoListItem key={item.id} item={item} />))
              : ('')
            }
          </div>)}
        </div>
      </div>
    </div>
  );

};
const mapStateToProps = createStructuredSelector({ user: selectCurrentUser });

export default connect(mapStateToProps)(TodoListTabs);
