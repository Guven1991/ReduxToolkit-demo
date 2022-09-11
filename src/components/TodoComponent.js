import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from '../store/feature/todo/TodoSlice';

function TodoComponent() {
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();

    const TodoAdded = () => {
        dispatch(addTodo(title));
        setTitle("");
    }
  return (
    <div>
      <h1>Todo Component</h1>
      <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)}/>
      <button onClick={TodoAdded}>Added Todo</button>
    </div>
  )
}

export default TodoComponent
