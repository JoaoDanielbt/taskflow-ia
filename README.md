# TaskFlow IA

## Descrição

O TaskFlow IA é um dashboard desenvolvido para auxiliar gestores no acompanhamento de equipes, tarefas atrasadas, distribuição de trabalho e fluxo operacional.

O projeto foi criado a partir do cenário proposto no desafio técnico, no qual Ricardo enfrentava dificuldades para acompanhar a execução das atividades da equipe, identificar atrasos e visualizar a carga de trabalho dos colaboradores.

## Problema

Ricardo possuía dificuldade em:

* Identificar tarefas atrasadas rapidamente;
* Acompanhar o andamento das atividades da equipe;
* Visualizar o fluxo de trabalho de forma simples e objetiva;
* Identificar colaboradores sobrecarregados ou ociosos;
* Obter indicadores para apoiar a tomada de decisão.

## Metodologia Escolhida

Foi adotada a metodologia Kanban por ser uma abordagem visual, simples e eficiente para acompanhamento de atividades.

A divisão das tarefas em colunas permite identificar rapidamente:

* O que ainda precisa ser feito;
* O que está em andamento;
* O que já foi concluído.

Essa escolha foi feita por atender diretamente às necessidades apresentadas no desafio.

## Solução

Foi desenvolvido um dashboard contendo:

* Cadastro de novas tarefas;
* Indicadores de desempenho;
* Indicador de total de tarefas calculado dinamicamente;
* Visualização de tarefas atrasadas;
* Indicador de carga de trabalho por colaborador;
* Quadro Kanban dividido em:

  * A Fazer;
  * Em Andamento;
  * Concluído.

## Justificativa dos Indicadores

### Total de Tarefas

Permite acompanhar o volume total de trabalho existente.

### Em Andamento

Permite visualizar a quantidade de atividades atualmente sendo executadas.

### Concluídas

Indica o volume de entregas realizadas.

### Atrasadas

Permite identificar rapidamente atividades que exigem atenção imediata.

### Taxa de Conclusão

Fornece uma visão geral do desempenho da operação.

### Carga de Trabalho

Permite identificar possíveis desequilíbrios na distribuição das tarefas entre os colaboradores.

## Tecnologias Utilizadas

* React
* TypeScript
* CSS
* Git
* GitHub

## Funcionalidades

* Dashboard de indicadores;
* Cadastro de tarefas;
* Gestão visual por Kanban;
* Visualização de tarefas atrasadas;
* Controle de carga de trabalho;
* Indicadores de acompanhamento;
* Interface simples e intuitiva.

## Limitações da Versão Atual

Para atender ao prazo do desafio, foram utilizadas informações de exemplo armazenadas localmente na aplicação.

Não foram implementados:

* Banco de dados;
* Autenticação de usuários;
* Persistência permanente das tarefas;
* Integrações externas.

## Melhorias Futuras

Com mais tempo, poderiam ser adicionadas:

* Movimentação de tarefas entre colunas;
* Edição e exclusão de tarefas;
* Persistência em banco de dados;
* Alertas automáticos de prazo;
* Gráficos de desempenho;
* Integração com WhatsApp e e-mail.

## Como Executar o Projeto

```bash
npm install
npm run dev
```

Após iniciar o projeto, acesse:

http://localhost:5173

## Autor

João Daniel
