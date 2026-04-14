export type Proposal = {
  customer: string;
  service: string;
  description: string;
  language: string;
};

export const proposals: Proposal[] = [
  {
    customer: "Lucas Andrade",
    service:
      "Desenvolvimento de sistema web para geração de propostas automatizadas",
    description: `
Estou procurando um desenvolvedor para criar um sistema web que gere propostas comerciais automaticamente com base em inputs do usuário.

Contexto:
Atualmente faço propostas manualmente e isso está consumindo muito tempo. Quero automatizar esse processo usando templates dinâmicos e, se possível, integração com IA.

Requisitos:
- Formulário para entrada de dados (cliente, serviço, preço, prazo, etc)
- Geração automática de proposta em texto estruturado
- Possibilidade de exportar em PDF
- Interface simples e responsiva (desktop e mobile)
- Backend organizado e escalável

Diferenciais:
- Experiência com IA (ex: geração de texto)
- Experiência com Next.js ou frameworks modernos
- Conhecimento em UX/UI

Entregas esperadas:
- Sistema funcional hospedado
- Código organizado
- Documentação básica

Por favor, envie:
- Portfólio
- Prazo estimado
- Valor aproximado

Existe possibilidade de continuidade para novas features futuramente.
    `,
    language: "pt_BR",
  },
];
