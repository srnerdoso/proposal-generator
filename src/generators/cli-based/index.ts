import { useProposal } from "@/hooks/useProposal.ts";
import type { CliBased } from "@/settings.ts";
import { getProfileByName } from "@/utils/getProfileByName.ts";
import { cliUseCases } from "./cases.ts";

export function generateWithCli(settings: CliBased) {
  const apiCase = cliUseCases(settings.cli);
  const profile = getProfileByName(settings.profile);
  return useProposal(apiCase, profile);
}
