import "dotenv/config";
import fs from "fs";
import { generateWithApi } from "./generators/api-based/index.ts";
import { generateWithCli } from "./generators/cli-based/index.ts";
import { settings } from "./settings.ts";
import path from "path";

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

  const proposals = await generate();

  proposals.forEach((proposal, i) => {
    if (proposal) {
      console.log(`Salvando propostas ${i + 1} de ${proposals.length}...`);

      const dir = path.join(process.cwd(), "proposals");
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(
        path.join(dir, proposal.file),
        proposal.content,
        "utf-8",
      );

      console.log("Propostas salvas com sucesso!");
      console.log("Arquivo salvo em: " + "./proposals/" + proposal.file);
    } else {
      console.error("Erro ao gerar propostas.");
    }
  });
}

exec();
