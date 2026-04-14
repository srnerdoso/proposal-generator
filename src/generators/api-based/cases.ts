import { type ApiBased } from "@/settings.ts";
import type { AsyncProposalGenerator } from "../types.ts";
import type { OllamaResponse } from "./responses.ts";
import { GoogleGenAI } from "@google/genai";

export function apiUseCases({
  model,
  url,
  type,
  apiKey,
}: ApiBased["api"]): AsyncProposalGenerator {
  return {
    ollama: async function (prompt: string): Promise<string> {
      if (!url) {
        throw new Error("API URL is not defined.");
      }

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

    google: async function (prompt: string): Promise<string> {
      const googleAi = new GoogleGenAI({ apiKey });

      const response = await googleAi.models.generateContent({
        model,
        contents: prompt,
      });
      return response.text ?? "ERROR";
    },
  }[type];
}
