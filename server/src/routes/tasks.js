import { Router } from 'express';
import Task from '../models/Task.js';
import { authRequired } from '../middleware/auth.js';

const router = Router();

// Get all tasks for user
router.get('/', authRequired, async (req,res)=>{
  const tasks = await Task.find({ owner: req.userId }).sort({ createdAt: -1 });
  res.json(tasks);
});

// Create
router.post('/', authRequired, async (req,res)=>{
  const { title, description } = req.body;
  if(!title) return res.status(400).json({error:'Title is required'});
  const task = await Task.create({ title, description, owner: req.userId });
  res.status(201).json(task);
});

// Update status or content
router.put('/:id', authRequired, async (req,res)=>{
  const { id } = req.params;
  const { title, description, status } = req.body;
  const updated = await Task.findOneAndUpdate({ _id:id, owner:req.userId }, { title, description, status }, { new:true });
  if(!updated) return res.status(404).json({error:'Not found'});
  res.json(updated);
});

// Delete
router.delete('/:id', authRequired, async (req,res)=>{
  const { id } = req.params;
  const deleted = await Task.findOneAndDelete({ _id:id, owner:req.userId });
  if(!deleted) return res.status(404).json({error:'Not found'});
  res.json({ ok:true });
});

export default router;
