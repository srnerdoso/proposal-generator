// FIXME: Otimizar prompts. Manter em um prompt único para evitar propostas muito extensas. Deve divir apenas para analisar cada sessão. Após isso todas as analises devem ser unidas para um agente analisar e gerar uma proposta otimizada com base nas analises.

import type { AsyncProposalGenerator } from "@/generators/types.ts";
import type { Profile } from "@/profiles.ts";
import { proposals, type Proposal } from "@/proposals.ts";

function generatePresentation(
  request: AsyncProposalGenerator,
  profile: Profile,
) {
  const profileStr = JSON.stringify(profile);
  console.log("Perfil a gerar:");
  console.log(profileStr);

  const prompt =
    "Gere um apresentação de proposta de freelance profissional com base nos seguintes dados:\n" +
    profileStr;
  return request(prompt);
}

function generateSpecification(
  request: AsyncProposalGenerator,
  proposals: Proposal,
) {
  const proposalStr = JSON.stringify(proposals);
  console.log("Proposta a gerar:");
  console.log(proposalStr);

  const prompt =
    "Gere uma especificação de serviço com base nos seguintes dados:\n" +
    proposalStr;
  return request(prompt);
}

function generateOffer(request: AsyncProposalGenerator, proposals: Proposal) {
  const proposalStr = JSON.stringify(proposals);
  console.log("Proposta a gerar:");
  console.log(proposalStr);

  const prompt =
    "Gere uma oferta de serviço com base nos seguintes dados:\n" + proposalStr;
  return request(prompt);
}

function normalizeFileName(customer: string) {
  const date = new Date().toISOString().slice(2, 10).replace(/-/g, "");
  const customerNormalized = customer.replace(/\s/g, "_");
  return ("proposal_" + date + "_" + customerNormalized).toUpperCase() + ".md";
}

export async function useProposal(
  request: AsyncProposalGenerator,
  profile: Profile,
) {
  const proposal = proposals[0]!!;

  console.log("Gerando apresentação...");
  const presentation = await generatePresentation(request, profile);
  console.log("Apresentação gerada com sucesso! Detalhes abaixo:");
  console.log(presentation);

  console.log("Gerando especificação...");
  const specification = await generateSpecification(request, proposal);
  console.log("Especificação gerada com sucesso! Detalhes abaixo:");
  console.log(specification);

  console.log("Gerando oferta...");
  const offer = await generateOffer(request, proposal);
  console.log("Oferta gerada com sucesso! Detalhes abaixo:");
  console.log(offer);

  const file = normalizeFileName(proposal.customer);

  return {
    file,
    presentation,
    specification,
    offer,
  };
}
