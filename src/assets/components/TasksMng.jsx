function TasksMng() {
    return (<div className="h-100 w-150 my-50  bg-pink-400 rounded-md flex-col justify-self-center justify-center ">
        <h1 className="text-center text-xl text-justify-center my italic h-fit rounded-xl font-bold">Gerênciador de Tarefas</h1>
        <div className="">
        <input className="bg-white rounded-md h-10 w-140 mx-5 my-5"placeholder="Digite sua tarefa aqui" type="text" />
            <input className="bg-white rounded-md h-10 w-140 mx-5 my-5" placeholder="Digite sua descrição aqui" type="text" />
        </div>
        <button className="flex bg-white rounded-md h-10 w-30 justify-self-center align italic font-thin">
            Adicionar
        </button>
    </div> );
}

export default TasksMng;