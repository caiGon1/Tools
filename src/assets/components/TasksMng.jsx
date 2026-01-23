import { LucideCalendar, Trash } from "lucide-react";
import { useEffect, useState } from "react";

function TasksMng({onCalendarClick}) {
  const [task, setTask] = useState();
  const [description, setDescription] = useState();
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function AddTaskSubmit(task, description) {
    const newTask = {
      id: Date.now(),
      task,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }
  
  function onTaskClick(tasksId) {
    const newTasks = tasks.map((tasks) => {
      if (tasks.id === tasksId) {
        return { ...tasks, isCompleted: !tasks.isCompleted };
      } else {
        return tasks;
      }
    });
    setTasks(newTasks);
  }

  function onTaskDelete(tasksId) {
    const newTasks = tasks.filter((task) => task.id != tasksId);
    setTasks(newTasks);
  }

    function handleCalendarClick(taskId) {
      const taskFound = tasks.find((task) => task.id === taskId);
  
      if (!taskFound) return;
  
      const calendarEvent = {
        title: taskFound.task,
        start: new Date(),
        end: new Date(),
        desc: taskFound.description,
      };
  
      onCalendarClick(calendarEvent);
    }
  

  return (
    <div className="w-[90%] md:w-1/2 lg:max-w-xl my-50  bg-pink-300 rounded-md flex-col justify-self-center justify-center shadow-2xl">
      <h1 className="text-center text-xl text-justify-center my  h-fit rounded-xl ">
        Gerênciador de Tarefas
      </h1>
      <div className="flex flex-col gap-6 ml-2 mr-2 my-2">
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

        <div className="mt-6 ">
          {tasks.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-md p-3 mb-3 shadow flex justify-between"
            >
              <button
                className={`hover:cursor-pointer ${item.isCompleted && "line-through"} `}
                onClick={() => onTaskClick(item.id)}
              >
                <h2 className={`font-semibold text-lg`}>{item.task}</h2>
                <p className={`text-sm text-gray-700`}>{item.description}</p>
              </button>

              <div className="flex ml-auto gap-3">
                <button
                  title="Adicionar ao calendário"
                  onClick={() => handleCalendarClick(item.id)}
                  className="text-gray-500 hover:cursor-pointer"
                >
                  <LucideCalendar />
                </button>
                <button
                  onClick={() => onTaskDelete(item.id)}
                  title="Remover tarefa"
                  className="text-gray-500 hover:cursor-pointer"
                >
                  <Trash />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TasksMng;
