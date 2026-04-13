import { useProposal } from "../../hooks/useProposal.js";
import { gemini } from "./clis.js";

export function generateWithCli() {
  switch (settings.cli) {
    case "gemini":
      return useProposal(gemini);
    default:
      console.error(
        "Tipo de API desconhecido. Adicione novos tipos em 'api-types.js'.",
      );
  }
}
