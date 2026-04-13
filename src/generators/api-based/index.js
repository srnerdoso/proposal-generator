import { useProposal } from "../../hooks/useProposal.js";
import { settings } from "../../settings.js";
import { ollama } from "./apis.js";

export function generateWithApi() {
  switch (settings.api.type) {
    case "ollama":
      return useProposal(ollama);
    default:
      console.error(
        "Tipo de API desconhecido. Adicione novos tipos em 'api-types.js'.",
      );
  }
}
