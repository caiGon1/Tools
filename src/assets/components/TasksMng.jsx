import { useState } from "react";

function TasksMng() {
  const [task, setTask] = useState();
  const [description, setDescription] = useState();
  const [tasks, setTasks] = useState([]);

  function AddTaskSubmit(task, description) {
    const newTask = {
      id: Date.now(),
      task,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="min-h-[100] w-150 my-50  bg-pink-300 rounded-md flex-col justify-self-center justify-center shadow-2xl">
      <h1 className="text-center text-xl text-justify-center my italic h-fit rounded-xl font-extralight">
        Gerênciador de Tarefas
      </h1>
      <div className="flex flex-col gap-6 ml-2 mr-2">
        <input
          className="bg-white rounded-md px-3 py-2 mt-3 shadow"
          placeholder="Digite sua tarefa aqui"
          value={task}
          onChange={(event) => setTask(event.target.value)}
          type="text"
        />
        <input
          className="bg-white rounded-md px-3 py-2 shadow"
          placeholder="Digite sua descrição aqui"
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <button
          onClick={() => {
            if (!task.trim() || !description.trim()) {
              return alert("Preencha o título e descrição das tarefas...");
            }
            AddTaskSubmit(task, description);
            setTask("");
            setDescription("");
          }}
          className="bg-white rounded-md px-4 py-2 mx-auto hover:cursor-pointer transition delay-150 duration-300 hover:bg-pink-100"
        >
          Adicionar
        </button>
        <div className="mt-6">
          {tasks.map((item) => (
            <div key={item.id} className="bg-white rounded-md p-3 mb-3 shadow">
              <h2 className="font-semibold text-lg">{item.task}</h2>

              <p className="text-sm text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TasksMng;
