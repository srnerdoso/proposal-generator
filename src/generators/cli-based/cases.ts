import type { CliBased } from "@/settings.ts";
import { execSync } from "child_process";
import type { SyncProposalGenerator } from "../types.ts";

export function cliUseCases(type: CliBased["cli"]): SyncProposalGenerator {
  return {
    gemini: function (prompt: string): string {
      const response = execSync(`gemini -p "${prompt}"`, {
        encoding: "utf-8",
      });
      return response;
    },
  }[type];
}
