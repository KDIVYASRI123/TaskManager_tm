import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, trim: true },
  status: { type: String, enum: ['todo','doing','done'], default: 'todo' },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

export default mongoose.model('Task', taskSchema);
