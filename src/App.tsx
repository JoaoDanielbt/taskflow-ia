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
const kanban = {
  aFazer: [
    {
      tarefa: 'Atualizar CRM',
      responsavel: 'Lucas'
    },
    {
      tarefa: 'Revisar contrato comercial',
      responsavel: 'Fernanda'
    }
  ],

  emAndamento: [
    {
      tarefa: 'Projeto Solar Fazenda São José',
      responsavel: 'Ana'
    }
  ],

  concluido: [
    {
      tarefa: 'Organizar documentação interna',
      responsavel: 'Carlos'
    }
  ]
}
  return (
    <div>
      <h1>TaskFlow IA</h1>

     <h2>Indicadores</h2>

<div className="indicadores">

  <div className="indicador">
    <strong>Total</strong>
    <p>{totalTarefas}</p>
  </div>

  <div className="indicador">
    <strong>Em andamento</strong>
    <p>{tarefasEmAndamento}</p>
  </div>

  <div className="indicador">
    <strong>Concluídas</strong>
    <p>{tarefasConcluidas}</p>
  </div>

  <div className="indicador">
    <strong>Atrasadas</strong>
    <p>{tarefasAtrasadas}</p>
  </div>

  <div className="indicador">
    <strong>Taxa de conclusão</strong>
    <p>{taxaConclusao}%</p>
  </div>

</div>

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
<h2>Kanban</h2>

<div className="kanban">

  <div className="coluna a-fazer">
    <h3>A Fazer</h3>

    <ul>
      {kanban.aFazer.map((item, index) => (
        <li key={index}>
          {item.tarefa} - {item.responsavel}
        </li>
      ))}
    </ul>
  </div>

  <div className="coluna em-andamento">
    <h3>Em Andamento</h3>

    <ul>
      {kanban.emAndamento.map((item, index) => (
        <li key={index}>
          {item.tarefa} - {item.responsavel}
        </li>
      ))}
    </ul>
  </div>

  <div className="coluna concluido">
    <h3>Concluído</h3>

    <ul>
      {kanban.concluido.map((item, index) => (
        <li key={index}>
          {item.tarefa} - {item.responsavel}
        </li>
      ))}
    </ul>
  </div>

</div>

</div>

  )
}

export default App