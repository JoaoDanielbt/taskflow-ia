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
  const taxaConclusao = 45
  const atrasadas = [
  {
    tarefa: 'Projeto Solar Fazenda São José',
    responsavel: 'Ana',
    atraso: '3 dias'
  },
  {
    tarefa: 'Aprovação de Layout Cliente XPTO',
    responsavel: 'Lucas',
    atraso: '5 dias'
  },
  {
    tarefa: 'Revisão Material Didático Matemática',
    responsavel: 'Fernanda',
    atraso: '2 dias'
  }
]

  return (
    <div>
      <h1>TaskFlow IA</h1>

      <h2>Indicadores</h2>

      <p>Total de tarefas: {totalTarefas}</p>
      <p>Em andamento: {tarefasEmAndamento}</p>
      <p>Concluídas: {tarefasConcluidas}</p>
      <p>Atrasadas: {tarefasAtrasadas}</p>
      <p>Taxa de conclusão: {taxaConclusao}%</p>

      <h2>Equipe</h2>

      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>
            {tarefa.responsavel} → {tarefa.atividade}
          </li>
        ))}
      </ul>

<h2>Tarefas Atrasadas</h2>

<ul>
  {atrasadas.map((item, index) => (
    <li key={index}>
      {item.tarefa} | Responsável: {item.responsavel} | Atraso: {item.atraso}
    </li>
  ))}
</ul>

</div>

  )
}

export default App