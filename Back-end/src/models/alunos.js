import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  CPF: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Aluno', Schema);