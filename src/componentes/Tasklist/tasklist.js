import React from "react";
import "./tasklist.css";
import PropTypes from "prop-types";
//import plusIcon from "../../img/plus_btn.png";

import TaskItem from "../Taskitem/Taskitem";

export default function TaskList({
  title,
  taskState,
  onAddTask,
  tasks,
  onTaskUpdate,
  onDeleteTask,
}) {
  const addTask = () => {
    onAddTask("Nova tarefa", taskState);
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.state}
              onTaskUpdate={onTaskUpdate}
              onDeleteTask={onDeleteTask}
            />
          );
        })}
        {tasks.length === 0 && <div className="empty-list">Lista Vazia</div>}
        <button onClick={addTask} className="btn">
          Adicionar Tarefa
        </button>
      </div>
    </div>
  );
}

TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
};
