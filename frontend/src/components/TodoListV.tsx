import { TodoItem } from "./TodoItemV";
import AddIcon from '/src/assets/add.svg?react'

export function TodoList() {
    return (



        <div className=" bg-gray-600 h-auto w-[320px] flex  justify-center p-1.5 items-center rounded-xl ">

            <div className=" gap-1  flex w-full h-full flex-col">


                <div className="  rounded-md  text-white wrap-break-word font-[600] text-[14px] leading-4 p-1.5 hover:bg-gray-800" >

                    Macacadas de hoje
                </div>

                <div>
                    <TodoItem></TodoItem>
                </div>

                <div className=" bg-gray-200 w-full h-[35px] rounded-md flex  px-2 items-center gap-2 text-black text-[14px] font-[600] leading-0" >
                    <AddIcon className=" size-[20px]  text-gray-800 cursor-pointer hover:text-white"  onClick={() => addItem("New Option")} />

                    <div >Adicionar tarefa</div>
                </div>

            </div>


        </div>
    );
}