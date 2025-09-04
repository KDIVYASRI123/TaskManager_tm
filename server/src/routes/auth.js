import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = Router();

router.post('/register', async (req,res)=>{
  try {
    const { name, email, password } = req.body;
    if(!name || !email || !password) return res.status(400).json({error:'All fields required'});
    const exists = await User.findOne({ email });
    if(exists) return res.status(400).json({error:'Email already registered'});
    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashed });
    const token = jwt.sign({ id:user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user: { id:user._id, name:user.name, email:user.email } });
  } catch (e) {
    res.status(500).json({error:e.message});
  }
});

router.post('/login', async (req,res)=>{
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if(!user) return res.status(400).json({error:'Invalid credentials'});
    const ok = await bcrypt.compare(password, user.password);
    if(!ok) return res.status(400).json({error:'Invalid credentials'});
    const token = jwt.sign({ id:user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user: { id:user._id, name:user.name, email:user.email } });
  } catch (e) {
    res.status(500).json({error:e.message});
  }
});

export default router;
