import { profiles, type Profile } from "@/profiles.ts";

export function getProfileByName(name: string): Profile {
  if (!profiles || profiles.length === 0) {
    console.error(
      "Nenhum perfil disponível. Crie um novo perfil em properties.js.",
    );
    throw new Error("Nenhum perfil disponível.");
  }

  const profile = profiles.find((p) => name === p.name);

  if (!profile) {
    console.error("Perfil inválido.");
    throw new Error("Perfil inválido.");
  }

  return profile;
}
