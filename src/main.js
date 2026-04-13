import { generateWithApi } from "./generators/api-based/index.js";
import { generateWithCli } from "./generators/cli-based/index.js";
import { settings } from "./settings.js";
import fs from "fs";

// FIXME: Trocar para ts. Já cresceu demais e js não está sendo produtivo.

function exec() {
  console.log("Gerando propostas...");
  console.log("Modo de execução: " + settings.mode);

  function generate() {
    switch (settings.mode) {
      case "cli-based":
        console.log("Gerando propostas via CLI...");
        console.log("Perfil de CLI: " + settings.cli);
        return generateWithCli();
      case "api-based":
        console.log("Gerando propostas via API...");
        console.log("Perfil de API: " + settings.api.type);
        return generateWithApi();
    }
  }
  const proposal = generate();
  if (proposal) {
    console.log("Propostas geradas com sucesso!");
    console.log("Detalhes da proposta:");
    console.log(proposal);

    fs.writeFileSync("../proposals/" + proposal + ".md", proposal);
  } else {
    console.error("Erro ao gerar propostas.");
  }
}

exec();
