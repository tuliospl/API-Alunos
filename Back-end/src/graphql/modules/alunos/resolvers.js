import Aluno from '../../../models/alunos';

export default {
  Query: {
    alunos: () => Aluno.find(),
    aluno: (_, { id }) => Aluno.findById(id),
  },
  Mutation: {
    createAluno: (_, { data }) => Aluno.create(data),
    updateAluno: (_, { id, data }) => Aluno.findOneAndUpdate(id, data, { new: true }),
    deleteAluno: async (_, { id }) => !!(await Aluno.findOneAndDelete(id)),
  },
};