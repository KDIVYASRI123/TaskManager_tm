import React, { useState } from 'react';

export default function AddTaskModal({ onClose, onCreate }){
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const submit = (e)=>{
    e.preventDefault();
    onCreate({ title, description });
  };

  return (
    <div className="modal-backdrop">
      <form className="modal" onSubmit={submit}>
        <h3>New Task</h3>
        <label>Title</label>
        <input required value={title} onChange={e=>setTitle(e.target.value)} placeholder="e.g. Create Mobile App Design" />
        <label>Description</label>
        <textarea rows="3" value={description} onChange={e=>setDescription(e.target.value)} placeholder="Optional details..." />
        <div style={{display:'flex', justifyContent:'flex-end', gap:8}}>
          <button type="button" className="btn secondary" onClick={onClose}>Cancel</button>
          <button className="btn primary" type="submit">Add Task</button>
        </div>
      </form>
    </div>
  )
}
