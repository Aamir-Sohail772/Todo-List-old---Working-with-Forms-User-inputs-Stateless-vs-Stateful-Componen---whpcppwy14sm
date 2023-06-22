import React, { useState } from "react";
import "./../styles/App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const editTask = (index, editedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = editedTask;
    setTasks(updatedTasks);
  };

  return (
    <div id="main">
      <textarea id="task" onChange={handleTaskChange} value={task}></textarea>
      <button id="btn" onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="list">
            {task}
            <button className="edit" onClick={() => editTask(index, task)}>Edit</button>
            <button className="delete" onClick={() => deleteTask(index)}>Delete</button>
            <textarea
              className="editTask"
              onChange={(e) => editTask(index, e.target.value)}
              value={task}
            ></textarea>
            <button
              className="saveTask"
              onClick={() => editTask(index, task)}
              disabled={task.trim() === ""}
            >
              Save
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;







// import React, { useState } from "react";
// import "./../styles/App.css";

// function App() {
//   const [task, setTask] = useState("");
//   const [tasks, setTasks] = useState([]);

//   const handleTaskChange = (e) => {
//     setTask(e.target.value);
//   };

//   const addTask = () => {
//     if (task.trim() !== "") {
//       setTasks([...tasks, task]);
//       setTask("");
//     }
//   };

//   const deleteTask = (index) => {
//     const updatedTasks = [...tasks];
//     updatedTasks.splice(index, 1);
//     setTasks(updatedTasks);
//   };

//   const editTask = (index) => {
//     const updatedTasks = [...tasks];
//     updatedTasks[index] = task;
//     setTasks(updatedTasks);
//   };

//   return (
//     <div id="main">
//       <textarea id="task" onChange={handleTaskChange} value={task}></textarea>
//       <button id="btn" onClick={addTask}>Add Task</button>

//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index} className="list">
//             {task}
//             <button className="edit" onClick={() => editTask(index)}>Edit</button>
//             <button className="delete" onClick={() => deleteTask(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;





// import React from "react";
// import "./../styles/App.css";

// function App() 
// {
// 	return (
// 	<div id="main">
// 	//Do not alter main div
// 	//Please do not alter the functional component as tests depend on the type of component.
// 	</div>
// 	);
// }


// export default App;
