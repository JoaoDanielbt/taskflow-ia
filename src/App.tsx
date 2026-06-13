import './App.css'

function App() {
  const tarefas = [
    {
      responsavel: 'Ana',
      atividade: 'Projeto Solar Fazenda São José'
    },
    {
      responsavel: 'Lucas',
      atividade: 'Aprovação de Layout Cliente XPTO'
    },
    {
      responsavel: 'Fernanda',
      atividade: 'Revisão Material Didático Matemática'
    }
  ]

  const totalTarefas = 20
  const tarefasEmAndamento = 8
  const tarefasConcluidas = 9
  const tarefasAtrasadas = 3

  return (
    <div>
      <h1>TaskFlow IA</h1>

      <h2>Indicadores</h2>

      <p>Total de tarefas: {totalTarefas}</p>
      <p>Em andamento: {tarefasEmAndamento}</p>
      <p>Concluídas: {tarefasConcluidas}</p>
      <p>Atrasadas: {tarefasAtrasadas}</p>

      <h2>Equipe</h2>

      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>
            {tarefa.responsavel} → {tarefa.atividade}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App