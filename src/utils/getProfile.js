import properties from "../properties";

export async function getProfile(profilenName) {
  const profiles = properties.profiles;

  if (!profiles || profiles.length === 0) {
    console.error(
      "Nenhum perfil disponível. Crie um novo perfil em properties.js.",
    );
    return;
  }

  const profile = profiles.find((p) => profilenName === p.name);

  if (!profile) {
    console.error("Perfil inválido.");
    return null;
  }

  return profile;
}
