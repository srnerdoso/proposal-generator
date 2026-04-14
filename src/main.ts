import fs from "fs";
import { generateWithApi } from "./generators/api-based/index.ts";
import { generateWithCli } from "./generators/cli-based/index.ts";
import { settings } from "./settings.ts";

async function exec() {
  console.log("Gerando propostas...");
  console.log("Modo de execução: " + settings.mode);

  function generate() {
    switch (settings.mode) {
      case "cli-based":
        console.log("Gerando propostas via CLI...");
        console.log("Perfil de CLI: " + settings.cli);
        return generateWithCli(settings);
      case "api-based":
        console.log("Gerando propostas via API...");
        console.log("Perfil de API: " + settings.api.type);
        return generateWithApi(settings);
    }
  }

  const proposal = await generate();

  if (proposal) {
    console.log("Propostas geradas com sucesso!");
    console.log("Detalhes da proposta:");
    console.log(proposal);

    const finalProposal = `${proposal.presentation}

${proposal.specification}

${proposal.offer}`;

    console.log("Salvando propostas...");
    fs.writeFileSync("./proposals/" + proposal.file, finalProposal, "utf-8");
    console.log("Propostas salvas com sucesso!");
    console.log("Arquivo salvo em: " + "./proposals/" + proposal.file);
  } else {
    console.error("Erro ao gerar propostas.");
  }
}

exec();
