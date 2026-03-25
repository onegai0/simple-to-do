import { useState } from 'react';
import './App.css'
import { TodoList } from './components/TodoList'
import AddIcon from '/src/assets/add.svg?react'
import RemoveIcon from '/src/assets/trash.svg?react'
import FilterIcon from '/src/assets/filter.svg?react'

import { useServerStatus } from './hooks/serverStatus'
function App() {

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Selecionar Projeto");
  const { status } = useServerStatus();
  const handleSelect = (value: string) => {
    setSelected(value);
    setOpen(false);

  };

  const statusColor: Record<number, string> = {
    0: 'bg-yellow-400',
    1: 'bg-red-500',
    2: 'bg-green-500',
  }


  const [options, setOptions] = useState<string[]>(["Onai",
    "Micro Machines",
    "Blender Tutorials",
    "Supermarket",]);

  function addItem(newItem: string) {
    setOptions(prev => {
      const exist = prev.some(item => item === newItem);
      if (!exist) return handleSelect(newItem), [...prev, newItem];

      let n = 0;

      while (prev.some(item => item === `${newItem} (${n})`)) {
        n++;
      }

      return handleSelect(`${newItem} (${n})`), [...prev, `${newItem} (${n})`];
    })
  }

  function removeItem(value: string) {
    setOptions(prev => {
      const newOptions = prev.filter(item => item !== value)

      const deletedIndex = prev.indexOf(value)
      const previousItem = prev[deletedIndex - 1]

      handleSelect(previousItem ?? newOptions[0] ?? "")

      return newOptions
    })
  }

  return (
    <>
      <header id="header">

        <div className='top-left'>

          <h1>
            <a href="https://www.youtube.com/@onegai_01" className="text-button">
              Ooka
            </a>
          </h1>
          <div className="relative w-[350px]  bg-gray-800 rounded  select-none">

            <div
              className="text-white cursor-pointer text-xs flex justify-between py-1.5 hover:bg-gray-600   items-center px-2"
              onClick={() => setOpen(!open)}
            >
              <h2 className="line-clamp-1">{selected}</h2>
              <img
                className="invert brightness-200"
                width="20"
                src="/src/assets/down-arrow.svg"
              />
            </div>

            <div className=' bg-white h-px'></div>

            <div
              className={`absolute left-0 w-full  bg-gray-800 rounded top-12 overflow-y-auto max-h-[222px] custom-scroll ${open ? "block" : "hidden"}`}
            >
              {options
                .filter((option) => option !== selected)
                .map((option) => (
                  <div
                    key={option}
                    onClick={() => handleSelect(option)}
                    className="pl-2 text-white cursor-pointer text-xs hover:bg-gray-600 py-1.5"
                  >
                    {option}
                  </div>
                ))}
            </div>
          </div>


          <AddIcon className="w-[20px] h-[20px]   text-gray-400 cursor-pointer hover:text-white" onClick={() => addItem("New Option")} />
          <RemoveIcon className="w-[20px] h-[20px]  text-gray-400 cursor-pointer hover:text-white" onClick={() => removeItem(selected)} />

        </div>




        <div className='flex gap-3.5 items-center'>

          <div className="relative group">
            <div className={`h-2 w-2  rounded-full  ${statusColor[status]}`}></div>

            <div className="absolute hidden group-hover:block  text-[14px] bg-gray-800 text-gray-200 px-2 rounded mr-2 right-full top-1/2 -translate-y-1/2 ml-2 whitespace-nowrap">
              {status === 0 ? "Loading" : status === 1 ? "Offline" : "Online"}
            </div>
          </div>
          <FilterIcon className="w-[20px] h-[20px]  text-gray-400 cursor-pointer hover:text-white" onClick={() => removeItem(selected)} />


          {/* <nav id="social" aria-label="Redes sociais">
            <ul>
              <li>
                <a
                  href="https://github.com/onegai0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="button-icon"
                    role="presentation"
                    aria-hidden="true"
                  >
                    <use href="/icons.svg#github-icon"></use>
                  </svg>
                  <span>GitHub</span>
                </a>
              </li>
            </ul>
          </nav> */}


        </div>


      </header>

      <section id="center">
        <div>
          <TodoList />
        </div>
      </section>

    </>
  )
}

export default App
