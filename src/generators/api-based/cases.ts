import { type ApiBased } from "@/settings.ts";
import type { AsyncProposalGenerator } from "../types.ts";
import type { OllamaResponse } from "./responses.ts";

export function apiUseCases({
  model,
  url,
  type,
}: ApiBased["api"]): AsyncProposalGenerator {
  return {
    ollama: async function (prompt: string): Promise<string> {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ model, prompt, stream: false }),
      });

      const data = (await response.json()) as OllamaResponse;
      return data.response;
    },
  }[type];
}
