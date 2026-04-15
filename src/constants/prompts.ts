import type { Profile } from "./profiles.ts";
import type { Proposal } from "./proposals.ts";

type Analyze = {
  profile: Profile;
  proposal: Proposal;
};

function inputsObjToString({ profile, proposal }: Analyze) {
  return `
Perfil do freelancer:
${JSON.stringify(profile)}

Projeto do cliente:
${JSON.stringify(proposal)}
`;
}

export function analyzeProfile({ profile, proposal }: Analyze) {
  return `
Você é um analista especialista em propostas freelance.

Sua tarefa é analisar profundamente o perfil do freelancer em conjunto com os dados do projeto do cliente, identificando os pontos mais relevantes para construção de uma proposta estratégica.

Entradas:
${inputsObjToString({ profile, proposal })}

Objetivo:
Gerar uma análise crítica e estratégica conectando o perfil do freelancer com as necessidades do projeto.

Estruture a resposta em Markdown (.md) com as seguintes seções:

## 1. Visão Geral
Resumo direto do encaixe entre o freelancer e o projeto.

## 2. Aderência Técnica
- Quais habilidades do freelancer são relevantes para o projeto
- Tecnologias alinhadas
- Lacunas (se existirem)

## 3. Experiência Relevante
- Experiências do freelancer que aumentam a confiança para este projeto
- Contextos semelhantes (se houver)

## 4. Diferenciais Competitivos
- Pontos fortes que tornam esse freelancer uma boa escolha específica para este projeto

## 5. Riscos e Pontos de Atenção
- Possíveis limitações do freelancer frente ao projeto
- Complexidades que exigem cuidado

## 6. Estratégia Recomendada
- Como o freelancer deve se posicionar na proposta
- O que destacar
- O que evitar

Regras:
- Não invente informações
- Baseie tudo exclusivamente nos dados fornecidos
- Seja direto, analítico e profissional
- Evite linguagem genérica
- Foque em gerar insumos úteis para criação da proposta final

Saída:
Retorne apenas o conteúdo em Markdown, sem explicações adicionais.
`;
}

export function analyzeProject({ profile, proposal }: Analyze) {
  return `
Você é um analista de requisitos e especialista em projetos freelance.

Sua tarefa é analisar profundamente os dados do projeto do cliente em conjunto com o perfil do freelancer, com foco em entender o problema, o escopo real e como isso se relaciona com a capacidade de execução do profissional.

Entradas:
${inputsObjToString({ profile, proposal })}

Objetivo:
Gerar uma análise clara e estratégica do projeto, considerando viabilidade, complexidade e alinhamento com o perfil do freelancer.

Estruture a resposta em Markdown (.md) com as seguintes seções:

## 1. Visão Geral do Projeto
Resumo direto do que o cliente precisa.

## 2. Problema do Cliente
- Qual problema está sendo resolvido
- Contexto implícito (se identificável a partir dos dados)

## 3. Escopo e Funcionalidades
- Lista das funcionalidades principais
- O que está explícito vs implícito

## 4. Complexidade Técnica
- Classifique: baixa, média ou alta
- Justifique com base no escopo

## 5. Aderência ao Perfil do Freelancer
- O quanto o freelancer está preparado para executar o projeto
- Pontos fortes aplicáveis
- Possíveis lacunas

## 6. Riscos e Incertezas
- Pontos que podem gerar problema no desenvolvimento
- Falta de informações no briefing
- Dependências externas (se houver)

## 7. Oportunidades Estratégicas
- Pontos onde o freelancer pode agregar mais valor
- Possíveis melhorias ou sugestões implícitas

Regras:
- Não invente informações
- Baseie-se apenas nos dados fornecidos
- Seja direto e analítico
- Evite linguagem genérica
- Foque em clareza e utilidade para tomada de decisão

Saída:
Retorne apenas o conteúdo em Markdown, sem explicações adicionais.
  `;
}

export function analyzeOffer({ profile, proposal }: Analyze) {
  return `
Você é um especialista em criação de ofertas para projetos freelance.

Sua tarefa é analisar os dados do perfil do freelancer e do projeto do cliente para construir uma oferta estratégica, clara e persuasiva, focada em conversão.

Entradas:
${inputsObjToString({ profile, proposal })}

Objetivo:
Gerar uma oferta profissional alinhada ao projeto e às capacidades do freelancer, deixando claro o valor entregue.

Estruture a resposta em Markdown (.md) com as seguintes seções:

## 1. Resumo da Oferta
- Descrição direta do que está sendo oferecido
- Conexão com o problema do cliente

## 2. Solução Proposta
- Como o freelancer pretende resolver o problema
- Abordagem técnica (se aplicável)
- Metodologia de trabalho

## 3. Escopo de Entrega
- Lista objetiva dos entregáveis
- O que está incluso
- O que não está incluso (se relevante)

## 4. Prazo Estimado
- Tempo de execução
- Possível divisão por etapas (se fizer sentido)

## 5. Valor e Condições
- Forma de cobrança (fixo, por hora, etc.) — se possível inferir
- Condições (ex: revisões, ajustes)

## 6. Diferenciais
- Pontos fortes do freelancer aplicados ao projeto
- Motivos para escolha

## 7. Chamada para Ação
- Encerramento direto incentivando resposta do cliente

Regras:
- Não invente informações que não possam ser inferidas
- Seja direto e persuasivo, sem exageros
- Evite linguagem genérica
- Foque em clareza de valor
- Adapte a comunicação ao contexto do projeto

Saída:
Retorne apenas o conteúdo em Markdown, sem explicações adicionais.
  `;
}

export function generateFinalProposal({
  offerAnalysis,
  projectAnalysis,
  profileAnalysis,
}: {
  profileAnalysis: string;
  projectAnalysis: string;
  offerAnalysis: string;
}) {
  return `
Você é um especialista em escrita de propostas freelance de alta conversão.

Sua tarefa é gerar uma proposta final unificada com base nas análises previamente realizadas.

Entradas:

Análise do perfil do freelancer:
${profileAnalysis}

Análise do projeto:
${projectAnalysis}

Análise da oferta:
${offerAnalysis}

Objetivo:
Construir uma proposta completa, estratégica e personalizada, conectando claramente o problema do cliente, a capacidade do freelancer e a solução oferecida.

Estrutura da resposta:

1. Apresentação
- Introdução do freelancer
- Posicionamento profissional
- Conexão direta com o projeto

2. Entendimento do Projeto
- Demonstração clara de entendimento do problema
- Contextualização do cenário do cliente

3. Solução Proposta
- Explicação objetiva de como o problema será resolvido
- Abordagem técnica e estratégica

4. Escopo de Entrega
- Lista clara dos entregáveis
- Limites do escopo (se aplicável)

5. Prazo e Organização
- Estimativa de tempo
- Forma de execução (etapas, comunicação, etc.)

6. Diferenciais
- Pontos fortes do freelancer aplicados ao projeto
- Motivos concretos para escolha

7. Investimento
- Apresentação da oferta (valor e condições, se disponíveis)

8. Encerramento
- Chamada para ação direta
- Incentivo à continuidade da conversa

Regras:
- Não invente informações fora das análises fornecidas
- Evite repetição desnecessária entre seções
- Seja direto, profissional e persuasivo
- Evite linguagem genérica
- Priorize clareza e objetividade
- Escreva como uma proposta real pronta para envio ao cliente
- NÃO utilize Markdown, símbolos de formatação ou qualquer estrutura visual especial

Saída:
Retorne apenas o texto final da proposta, sem explicações adicionais.
  `;
}
