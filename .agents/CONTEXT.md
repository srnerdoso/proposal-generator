# Project: Proposal Generator

Este é um projeto de uso local que auxilia na geração de propostas otimizadas para Freelaces.

## Geração

A geração é feita com auxilio de IAs CLI como Gemini CLI, Claude Code, Codex etc, porém, com orquestramento via código.

A geração precisa trabalhar com 2 tipos de dados:

1. [Temporários](#dados-temporários)
2. [Fixos](#dados-fixos)

> Os dados temporários sevem para dar contexto ao agente otimizando a especificação de projeto. Os dados fixos são dados persistidos no banco SQLite; eles servem para otimizar a apresentação do usuário também servindo como contexto para o agente.

### Dados temporários

Para otimização de proposta:

1. Nome do cliente
2. Título do serviço
3. Descrição do serviço

### Dados fixos

1. Habilidades do usuário
2. Experiência do usuário (projetos pessoais ou serviços feitos para outros clientes)

## Tecnologias

- Vite
- SQLite

## Libs

- Jest

## Limitações

- O sistema suporta apenas Gemini CLI atualmente.

## Acoplamento de Agentes CLI

Os agentes seguem padrões semelhantes, mas com leves diferenças de funcionamento, fazendo com que métodos que funcionam com o Gemini CLI não funcionem com o Claude Code por exemplo. Por isso todas as funções que fazem chamadas a algum agente devem ser feitas com use cases.

> O projeto atualmente suporta apenas Gemini CLI, mas isso não deve ser um impeditivo para isolar os use cases. Qualquer função ou chamada a agentes CLI que não tenha função isolada em casos de uso é estritamente proibida.

## Style

- Font Family: Poppins
- Font Size Base: 16px
- Themes: Black, Ligth
- Spacing: 5px, 10px, 20px

> Utilize o equivalente de `px` em `rem`

## Regras

O agente deve seguir estritamente as regras.

- Sempre implementar testes antes de implementar código real (Princípio TDD).
- Todas as páginas devem ser responsivas para PC e Mobile.
- Prefira `rem` a `px` direto.