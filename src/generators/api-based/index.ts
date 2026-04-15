import { useProposal } from "@/hooks/useProposal.ts";
import { getProfileByName } from "@/utils/getProfileByName.ts";
import { type ApiBased } from "../../settings.js";
import { apiUseCases } from "./cases.ts";

export function generateWithApi(settings: ApiBased) {
  const apiCase = apiUseCases(settings.api);
  const profile = getProfileByName(settings.profile);
  return useProposal(apiCase, profile);
}
