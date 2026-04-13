import { settings } from "../../settings.js";

const { url, model } = settings.api;

export async function ollama(prompt) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ model, prompt, stream: false }),
  });
  const data = await response.json();
  return data.response();
}
