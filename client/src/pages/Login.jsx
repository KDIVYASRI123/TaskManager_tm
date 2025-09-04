import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api';

export default function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const nav = useNavigate();

  const onSubmit = async (e)=>{
    e.preventDefault();
    try{
      const { data } = await api.post('/auth/login', { email, password });
      localStorage.setItem('token', data.token);
      nav('/');
    }catch(err){
      setError(err?.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div style={{display:'grid', placeItems:'center', minHeight:'100vh', background:'#fff7ef'}}>
      <form onSubmit={onSubmit} className="modal">
        <h3>Welcome back</h3>
        {error && <div className="pill" style={{marginBottom:10}}>{error}</div>}
        <label>Email</label>
        <input value={email} onChange={e=>setEmail(e.target.value)} type="email" required />
        <label>Password</label>
        <input value={password} onChange={e=>setPassword(e.target.value)} type="password" required />
        <div style={{display:'flex', gap:8, justifyContent:'space-between', alignItems:'center'}}>
          <button className="btn primary" type="submit">Login</button>
          <Link to="/register">Create account</Link>
        </div>
      </form>
    </div>
  )
}
