import { useState } from "react";
import "./index.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  function addTasks(newTask) {
    setTasks((tasks) => [...tasks, newTask]);
    console.log(tasks);
  }
  const deleteTask = (id) => {
    console.log(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div className="max-w-4xl text-white mx-auto pt-14 px-3 ">
      <h1 className="font-heading text-7xl text-green-400 text-center">
        To-Do List
      </h1>
      <Form addTasks={addTasks} />
      <Tasks tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};
const Form = ({ addTasks }) => {
  const [description, setDescription] = useState("");
  function handleForm(e) {
    e.preventDefault();
    const newTask = { description: description, id: Date.now() };
    addTasks(newTask);
    setDescription("");
  }

  return (
    <form className="bg-white rounded-full flex  p-3 justify-between gap-2 mt-10">
      <input
        className="font-regular bg-gray-300 placeholder-gray-700 text-gray-800 py-2 px-4  rounded-full w-[80%] focus:outline-green-400"
        placeholder="write a task..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button
        type="submit"
        className="bg-green-400 text-white px-7 font-regular rounded-full "
        onClick={handleForm}
      >
        Add Task
      </button>
    </form>
  );
};
const Tasks = ({ tasks, deleteTask }) => {
  return (
    <div className="my-10">
      <h2 className="font-heading text-4xl text-green-400 mb-4">
        Things to do :
      </h2>
      <ul className="h-[350px] bg-gray-300 rounded-2xl p-8 flex flex-col  gap-y-4 overflow-auto">
        {tasks.map((task) => (
          <Task task={task} deleteTask={deleteTask} key={task.id} />
        ))}
      </ul>
    </div>
  );
};

const Task = ({ task, deleteTask }) => {
  const [completed, setCompleted] = useState(false);

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleCheckboxChange = () => {
    setCompleted(!completed);
  };

  return (
    <li className="flex items-center justify-between bg-white rounded-lg p-4">
      <input
        type="checkbox"
        className="w-6 h-6"
        checked={completed}
        onChange={handleCheckboxChange}
      />
      <h3
        className={`text-gray-800 text-2xl w-[70%] overflow-auto ${
          completed ? "line-through" : ""
        }`}
      >
        {task.description}
      </h3>
      <button
        className="border-2 border-red-500 px-3 py-1 rounded-lg text-red-500 w-[20%]"
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  );
};

export default App;
