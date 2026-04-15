import type { AsyncProposalGenerator } from "@/generators/types.ts";
import type { Profile } from "@/constants/profiles.ts";
import { proposals, type Proposal } from "@/constants/proposals.ts";
import {
  analyzeOffer,
  analyzeProfile,
  analyzeProject,
  generateFinalProposal,
} from "@/constants/prompts.ts";

type AnalyseProps = {
  request: AsyncProposalGenerator;
  profile: Profile;
  proposal: Proposal;
};

function generatePresentationAnalysis({
  request,
  profile,
  proposal,
}: AnalyseProps) {
  console.log("Perfil a analisar:");
  console.log(JSON.stringify(profile));
  const prompt = analyzeProfile({ profile, proposal });
  return request(prompt);
}

function generateSpecificationAnalysis({
  request,
  profile,
  proposal,
}: AnalyseProps) {
  console.log("Proposta a analisar:");
  console.log(JSON.stringify(proposal));

  const prompt = analyzeProject({ profile, proposal });
  return request(prompt);
}

function generateOfferAnalysis({ request, profile, proposal }: AnalyseProps) {
  console.log("Proposta a gerar:");
  console.log(JSON.stringify(proposal));

  const prompt = analyzeOffer({ profile, proposal });
  return request(prompt);
}

function generateProposal({
  offerAnalysis,
  projectAnalysis,
  profileAnalysis,
  request,
}: {
  profileAnalysis: string;
  projectAnalysis: string;
  offerAnalysis: string;
  request: AsyncProposalGenerator;
}) {
  console.log("Gerando proposta final...");

  const prompt = generateFinalProposal({
    profileAnalysis,
    offerAnalysis,
    projectAnalysis,
  });
  return request(prompt);
}

function normalizeFileName(customer: string) {
  const date = new Date().toISOString().slice(2, 10).replace(/-/g, "");
  const customerNormalized = customer.replace(/\s/g, "_");
  return ("proposal_" + date + "_" + customerNormalized).toUpperCase() + ".md";
}

// TODO: Utilizar uma geração baseada em evento para gerar a proposta final. As
//       analises podem ser realizadas de forma asyncrona; quando uma terminar
//       envia um "sinal" para o evento de gerar a proposta final, se todas as
//       analises estiverem concluidas gera a proposta final.
export async function useProposal(
  request: AsyncProposalGenerator,
  profile: Profile,
) {
  // FIXME: Pode causar lentidão se usado com muitas propostas. Um sistema de
  //        fila ou limite deve ser utilizado. Para APIs externas pode valer a
  //        pena este sistema como está, mas não para IAs locais. Isso também
  //        pode causar problemas com rate limit de alguns serviços de IA.
  return await Promise.all(
    proposals.map(async (proposal) => {
      const analysisParams = {
        request,
        profile,
        proposal,
      };

      console.log("Gerando apresentação...");
      const presentation = await generatePresentationAnalysis(analysisParams);
      console.log("Apresentação gerada com sucesso! Detalhes abaixo:");
      console.log(presentation);

      console.log("Gerando especificação...");
      const specification = await generateSpecificationAnalysis(analysisParams);
      console.log("Especificação gerada com sucesso! Detalhes abaixo:");
      console.log(specification);

      console.log("Gerando oferta...");
      const offer = await generateOfferAnalysis(analysisParams);
      console.log("Oferta gerada com sucesso! Detalhes abaixo:");
      console.log(offer);

      console.log("Gerando proposta final...");
      const finalProposal = await generateProposal({
        profileAnalysis: presentation,
        projectAnalysis: specification,
        offerAnalysis: offer,
        request,
      });
      console.log("Proposta gerada com sucesso! Detalhes abaixo:");
      console.log(finalProposal);

      const file = normalizeFileName(proposal.customer);

      return {
        file,
        content: finalProposal,
      };
    }),
  );
}
