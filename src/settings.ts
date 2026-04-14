// WARNING: CLI ainda não é bem suportado
export type CliBased = { mode: "cli-based"; cli: "gemini"; profile: string };
export type ApiBased = {
  mode: "api-based";
  api: {
    type: "ollama" | "google";
    url?: string;
    model: string;
    apiKey?: string;
  };
  profile: string;
};

export const settings: CliBased | ApiBased = {
  mode: "api-based",
  api: {
    type: "google",
    // url: "http://localhost:11434/api/generate",
    model: "gemini-3-flash-preview",
    apiKey: process.env.API_KEY,
  },
  profile: "Dev",
};
