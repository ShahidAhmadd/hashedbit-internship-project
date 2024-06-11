import React from 'react'
import { AiFillDelete } from "react-icons/ai";


function Todolist(props) {
  return (
    <li className="list-item">
        {props.item}
        <span className='icons'>
          <button
onClick={e=>{
            props.deleteItem(props.index)
        }}><AiFillDelete /></button>
        </span>
    </li>
  )
}

export default Todolist