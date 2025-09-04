import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar.jsx';
import TaskCard from './TaskCard.jsx';
import AddTaskModal from './AddTaskModal.jsx';
import api from '../api.js';

// ⬇️ Import recharts
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [showAdd, setShowAdd] = useState(false);

  const load = async () => {
    const { data } = await api.get('/tasks');
    setTasks(data);
  };

  useEffect(() => {
    load();
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  const createTask = async (payload) => {
    const { data } = await api.post('/tasks', payload);
    setTasks((prev) => [data, ...prev]);
    setShowAdd(false);
  };

  const deleteTask = async (id) => {
    await api.delete('/tasks/' + id);
    setTasks((prev) => prev.filter((t) => t._id !== id));
  };

  const updateStatus = async (id, status) => {
    const { data } = await api.put('/tasks/' + id, { status });
    setTasks((prev) => prev.map((t) => (t._id === id ? data : t)));
  };

  // ✅ Count tasks by status
  const statusCount = tasks.reduce(
    (acc, task) => {
      acc[task.status] = (acc[task.status] || 0) + 1;
      return acc;
    },
    { todo: 0, doing: 0, done: 0 }
  );

  const data = [
    { name: 'To Do', value: statusCount.todo },
    { name: 'Doing', value: statusCount.doing },
    { name: 'Done', value: statusCount.done },
  ];

  const COLORS = ['#ffbb00', '#ff7a00', '#28a745'];

  return (
    <div className="app-shell">
      <Sidebar onLogout={logout} />
      <main className="content">
        <div className="topbar">
          <div className="title">Dashboard</div>
          <button className="add-btn" onClick={() => setShowAdd(true)}>
            + Add Task
          </button>
        </div>
        <div className="grid">
          <section className="card">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <h3 style={{ margin: 0 }}>Running Tasks</h3>
              <span className="pill">{tasks.length} total</span>
            </div>
            <div className="tasks" style={{ marginTop: 12 }}>
              {tasks.map((t) => (
                <TaskCard
                  key={t._id}
                  task={t}
                  onDelete={deleteTask}
                  onStatus={updateStatus}
                />
              ))}
              {tasks.length === 0 && (
                <div className="pill">No tasks yet. Click "Add Task".</div>
              )}
            </div>
          </section>

          {/* 📊 Activity Chart */}
          <section className="card">
            <h3 style={{ marginTop: 0 }}>Activity</h3>
            {tasks.length === 0 ? (
              <p style={{ color: '#666' }}>No tasks available yet.</p>
            ) : (
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            )}
          </section>
        </div>
      </main>
      {showAdd && (
        <AddTaskModal
          onCreate={createTask}
          onClose={() => setShowAdd(false)}
        />
      )}
    </div>
  );
}
