import type { TodoItemProps } from '../interfaces/ITodoItemProps';
import Checkbox from "../components/ui/Checkbox";
import RemoveIcon from '/src/assets/trash.svg?react'
import EditIcon from '/src/assets/edit.svg?react'

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className='flex bg-gray-200 pt-1 h-auto rounded-md px-2 group'>

      <div className='flex flex-col gap-1 w-full relative bg'>

        {/* Ícones posicionados no canto superior direito */}
        <div className='absolute top-0 right-0 gap-2 bg-gray-200 hidden  group-hover:flex '>
          <EditIcon className="size-[22px]  text-gray-700 cursor-pointer hover:text-white" />
          <RemoveIcon className="size-[21px]  text-gray-700 cursor-pointer hover:text-white" />
        </div>

        <div className=' absolute top-[2.5px]'>
          <Checkbox />
        </div>

        <div className=' select-none cursor-pointer'>
                  <div className='w-auto  mt-0.5 ps-6 items-start line-clamp-2 leading-4.5 group-hover:line-clamp-none text-[14px] wrap-break-word text-lg text-gray-900 font-extrabold '>
          Moggarosbetasasdaasdasdasdasdasdasdasdsadasydausydgausydgsyagdasuydgasud
        </div>

        <div className='flex items-end w-full mt-auto justify-between text-[12px] leading-4.5 h-5 font-[600] text-gray-600'>
          <div >10:30 • 01/08/2026</div>
          <div >Homekasdkasdkasdkasdk</div>
        </div>
        </div>

      </div>
    </div>
  );
}