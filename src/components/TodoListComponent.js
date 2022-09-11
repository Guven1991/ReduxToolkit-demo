import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {removeTodo, todoCompleted} from '../store/feature/todo/TodoSlice';

function TodoListComponent() {
    const todoList = useSelector(state => state.todoReducer.todos);

    const theme = useSelector(state => state.themeReducer.value);
    const dispatch = useDispatch();

    const onDelete = (id) => {
        dispatch(removeTodo({id}));
    }
  return (
    <div  style={{color: theme}}>
      <h1>Todo List Component</h1>
      <ul>
        {todoList.map((todo)=> 
        <li key={todo.id}>
            <span>{todo.title}</span>--
            <span>{String(todo.completed)}</span>--
            <button onClick={() => {onDelete(todo.id)}}>Delete</button>
            <button onClick={()=> {dispatch(todoCompleted(todo.id))}}>{String(todo.completed) === "false"? "In Progress": "Completed"}</button>
        </li>  )}
      </ul>
    </div>
  )
}

export default TodoListComponent

