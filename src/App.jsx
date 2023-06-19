import {useState} from 'react';
import { Form } from "./components/Form";
import {useDispatch, useSelector} from 'react-redux';
import { Todo } from './components/Todo';


function App() {
  
  const dispatch = useDispatch();
  const todos = useSelector((state)=>state.operationsReducer);
  const [editFormVisibility, setEditFormVisibility]=useState(false);
  const [editTodo, setEditTodo]=useState('');

  const handleEditClick=(todo)=>{
    setEditFormVisibility(true);
    setEditTodo(todo);
  }
  const cancelUpdate=()=>{
    setEditFormVisibility(false);
  }

    return (
    <div className="wrapper">
      <br></br>
      <h1 className="text-center">Add Your Task</h1>
      <Form 
      editFormVisibility={editFormVisibility} 
      editTodo={editTodo}
      cancelUpdate={cancelUpdate}/>
      <Todo
      handleEditClick={handleEditClick} 
      editFormVisibility={editFormVisibility}/>
    </div>
  );
  return (
    <div  className="container">
      <header>
        <h1>Add your task</h1>
      </header>
      {
        isEditing && (
          <EditForm
            editedTask={editTodo}
            updateTask={updateTask}
            closeEditMode={closeEditMode}
          />
        )
      }
      <Form addTask={addTask}/>
      {tasks && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          enterEditMode={enterEditMode}
        />
      )}
    </div>
  )
}

export default App;