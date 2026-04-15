# Proposal Generator (Gerador de Propostas Freelance)

O **Proposal Generator** é uma ferramenta de uso local desenvolvida para automatizar e otimizar a criação de propostas comerciais para freelancers. Ele utiliza Inteligência Artificial para analisar o perfil do freelancer em conjunto com os requisitos do projeto do cliente, gerando uma proposta estratégica, personalizada e de alta conversão.

## 🚀 Funcionalidades

O sistema opera em um fluxo de análise e geração em 4 etapas principais:

1.  **Análise do Perfil:** Identifica os pontos fortes, habilidades e experiências do freelancer que mais se alinham ao projeto.
2.  **Análise do Projeto:** Desmembra o briefing do cliente para entender o problema real, escopo implícito e complexidade técnica.
3.  **Análise da Oferta:** Constrói uma solução estratégica com prazos, entregáveis e diferenciais competitivos.
4.  **Proposta Final:** Consolida todas as análises em um texto pronto para envio, sem formatações excessivas, focado em clareza e persuasão.

## 🛠️ Tecnologias

- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Runtime:** [Node.js](https://nodejs.org/)
- **Integrações de IA:**
  - Google Generative AI (Gemini)
  - Ollama (IA Local)
  - Gemini CLI (Ainda em testes. Não recomendado utilizar)
- **Execução:** [tsx](https://tsx.is/)

## 📋 Pré-requisitos

Antes de começar, você precisará de:

- **Node.js** (v18 ou superior recomendado)
- **pnpm** (gerenciador de pacotes)
- Uma **API Key** do Google Gemini (se for usar o modo `api-based`) ou o **Ollama** instalado e rodando localmente.

## ⚙️ Configuração

### 1. Instalação

Clone o repositório e instale as dependências:

```bash
pnpm install
```

### 2. Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto e adicione sua chave de API do Google:

```env
API_KEY=sua_chave_aqui
```

### 3. Configurações de Execução (`src/settings.ts`)

No arquivo `src/settings.ts`, você define como o sistema deve se comportar:

- `mode`: Escolha entre `"api-based"` (Google/Ollama) ou `"cli-based"`.
- `api.type`: `"google"` ou `"ollama"`.
- `api.model`: O modelo de IA a ser utilizado (ex: `gemini-1.5-flash`).
- `profile`: O nome do perfil do freelancer que será usado (deve existir em `profiles.ts`).

### 4. Personalizando seu Perfil (`src/constants/profiles.ts`)

Edite o arquivo `src/constants/profiles.ts` para incluir seus dados profissionais, habilidades e experiências. O sistema usará esses dados para "defender" seu perfil na proposta.

### 5. Dados do Cliente e Projeto (`src/constants/proposals.ts`)

Adicione os detalhes do projeto para o qual você deseja gerar a proposta no arquivo `src/constants/proposals.ts`. Você pode adicionar múltiplas propostas para geração em lote.

> Não recomendado o uso de geração em lote se estiver utilizando modelos locais. Isto ainda não está otimizado e pode causar problemas de desempenho. Isso também pode causar problemas com rate limit em APIs como do Aistudio da Google.

## 📖 Como Usar

Para iniciar a geração das propostas, execute o comando:

```bash
pnpm gen
```

O sistema irá:
1. Ler os dados de perfil e propostas configurados.
2. Realizar as 4 etapas de análise via IA.
3. Salvar o resultado final na pasta `proposals/` com um nome padronizado (ex: `PROPOSAL_260414_NOME_DO_CLIENTE.md`).

## 🏗️ Arquitetura

O projeto segue princípios de:
- **Arquitetura Modular:** Separação clara entre geradores, constantes e casos de uso.
- **Padrão Strategy:** Facilita a alternância entre diferentes provedores de IA (Google, Ollama, CLI).
- **Padrão Factory:** Utilizado para instanciar o gerador correto com base nas configurações.

---
Desenvolvido para otimizar o tempo e aumentar a taxa de fechamento de projetos freelance.
