// FIXME: Otimizar prompts. Manter em um prompt único para evitar propostas muito extensas

function generatePresentation(request, profiles) {
  const prompt =
    "Gere um apresentação de proposta de freelance profissional com base nos seguintes dados:\n" +
    profiles;
  return request(prompt);
}

function generateSpecification(request, specification) {
  const prompt =
    "Gere uma especificação de serviço com base nos seguintes dados:\n" +
    specification;
  return request(prompt);
}

function generateOffer(request, specification) {
  const prompt =
    "Gere uma oferta de serviço com base nos seguintes dados:\n" +
    specification;
  return request(prompt);
}

export function useProposal(request, profiles, specification) {
  return {
    presentation: generatePresentation(request, profiles),
    specification: generateSpecification(request, specification),
    offer: generateOffer(request, specification),
  };
}
