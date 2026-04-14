export type CliBased = { mode: "cli-based"; cli: "gemini"; profile: string };
export type ApiBased = {
  mode: "api-based";
  api: { type: "ollama"; url: string; model: string };
  profile: string;
};

// const API_KEY = process.env.API_KEY;

export const settings: CliBased | ApiBased = {
  mode: "api-based",
  api: {
    type: "ollama",
    url: "http://localhost:11434/api/generate",
    model: "qwen3.5",
  },
  profile: "Dev",
};
