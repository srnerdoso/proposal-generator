import { execSync } from "child_process";

export function gemini(prompt) {
  const response = execSync(`gemini -p "${prompt}"`, {
    encoding: "utf-8",
  });

  return response;
}
