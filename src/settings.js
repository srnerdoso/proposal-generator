export const SETTINGS_MODES = ["cli-based", "api-based"];

/**
 * Settings (discriminated union pelo campo `mode`)
 *
 * Define o modo de execução do sistema:
 * - cli-based: execução via CLI local
 * - api-based: execução via API HTTP
 *
 * @typedef {Object} ApiBasedSettings
 * @property {"api-based"} mode
 * @property {Object} api
 * @property {"ollama"} api.type
 * @property {string} api.url
 * @property {string} api.model
 * @property {string} api.key
 *
 * @typedef {Object} CliBasedSettings
 * @property {"cli-based"} mode
 * @property {Object} cli
 * @property {"gemini"} cli.cli
 *
 * @typedef {ApiBasedSettings | CliBasedSettings} Settings
 */

/** @type {Settings} */
export const settings = {
  mode: SETTINGS_MODES[0],
  // api: {
  //   type: "ollama",
  //   url: "http://localhost:8000/ollama",
  //   model: "llama-2-13b",
  // },
  // cli: "gemini",
  // profile: "Dev",
};
