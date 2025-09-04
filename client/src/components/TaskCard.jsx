import React from 'react';

export default function TaskCard({ task, onDelete, onStatus }){
  return (
    <div className="task">
      <div>
        <div className="title">{task.title}</div>
        {task.description && <div style={{color:'#555', fontSize:12, marginTop:4}}>{task.description}</div>}
      </div>
      <div style={{display:'flex', alignItems:'center', gap:8}}>
        <span className="status">{task.status}</span>
        <select value={task.status} onChange={e => onStatus(task._id, e.target.value)}>
          <option value="todo">todo</option>
          <option value="doing">doing</option>
          <option value="done">done</option>
        </select>
        <button className="btn secondary" onClick={()=>onDelete(task._id)}>Delete</button>
      </div>
    </div>
  )
}
