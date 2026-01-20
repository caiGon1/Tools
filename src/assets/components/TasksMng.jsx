function TasksMng() {
  return (
    <div className="h-100 w-150 my-50  bg-pink-300 rounded-md flex-col justify-self-center justify-center shadow-2xl">
      <h1 className="text-center text-xl text-justify-center my italic h-fit rounded-xl font-extralight">
        Gerênciador de Tarefas
      </h1>
      <div className="flex flex-col gap-6 ml-2 mr-2">
        <input
          className="bg-white rounded-md px-3 py-2 mt-3 shadow"
          placeholder="Digite sua tarefa aqui"
          type="text"
        />
        <input
          className="bg-white rounded-md px-3 py-2 shadow"
          placeholder="Digite sua descrição aqui"
          type="text"
        />
        <button className="bg-white rounded-md px-4 py-2 italic font-thin mx-auto hover:cursor-pointer transition delay-150 duration-300 hover:bg-pink-100">
          Adicionar
        </button>
      </div>
    </div>
  );
}

export default TasksMng;
