import { profiles } from "./profiles.js";
import { execSync } from "child_process";
import readline from "readline";

//#region Utils

function ask(question) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

async function getDetailsService() {
  console.log("*** Digite os detalhes do serviço ***");

  const title = await ask("Título: ");
  const description = await ask("Descrição: ");

  if (
    !title ||
    !description ||
    title.trim() === "" ||
    description.trim() === ""
  ) {
    console.error("Os detalhes do serviço devem ser preenchidos.");
    return null;
  }

  return { title, description };
}

async function getProfile() {
  if (!profiles || profiles.length === 0) {
    console.error(
      "Nenhum perfil disponível. Crie um novo perfil em profiles.js.",
    );
    return;
  }

  console.log("*** Escolha o perfil ***");
  const profilesList = profiles.map((p, i) => `${i + 1}. ${p.name}`).join("\n");
  const answer = await ask(`\n${profilesList}\n> `);
  const index = Number(answer) - 1;

  if (isNaN(index) || !profiles[index]) {
    console.error("Perfil inválido.");
    return null;
  }

  return profiles[index];
}

//#endregion

function generatePresentation(profile) {
  const { freelancer, name, role, skills } = profile;
  const skillsStr = skills.join(", ");

  // FIXME: Os prompts devem ser substituídos por commands do gemini junto a skills e agentes especificos. O uso atual é apenas um beta do uso final.
  const prompt = `Gere uma apresentação de proposta de freelance com base nos seguintes dados. Perfil: ${name}; Cargo: ${role}; Freelancer: ${freelancer}; Habilidades: ${skillsStr}. Não edite código nem leia código. Apenas retorne o texto da apresentação da proposta.`;

  const result = execSync(`gemini -p "${prompt}"`, {
    encoding: "utf-8",
  });

  return result;
}

function generateSpecification(details) {
  const { title, description } = details;

  // FIXME: Os prompts devem ser substituídos por commands do gemini junto a skills e agentes especificos. O uso atual é apenas um beta do uso final.
  const prompt = `Gere uma especificação de serviço com base nos seguintes dados. Título: ${title}; Descrição: ${description}. Não edite código nem leia código. Apenas retorne o texto da especificação do serviço.`;

  const result = execSync(`gemini -p "${prompt}"`, {
    encoding: "utf-8",
  });

  return result;
}

function generateOffer(specification) {
  // FIXME: Os prompts devem ser substituídos por commands do gemini junto a skills e agentes especificos. O uso atual é apenas um beta do uso final.
  const prompt = `Gere uma oferta de serviço com base nos seguintes dados. Especificação: ${specification}. Analise complexidade, tempo médio de planejamento e tempo médio de programação do serviço, adicione um comentario geral e especifique o valor e tempo de entrega. Não edite código nem leia código. Apenas retorne o texto da oferta do serviço.`;

  const result = execSync(`gemini -p "${prompt}"`, {
    encoding: "utf-8",
  });

  return result;
}

async function exec() {
  const details = await getDetailsService();
  const profile = await getProfile();

  if (!profile || !details) {
    console.error("Erro ao gerar proposta. Valores de input incompletos.");
    return;
  }

  console.log("Gerando Apresentação...");
  const presentation = generatePresentation(profile);

  console.log("Gerando Especiificação...");
  const specification = generateSpecification(details);

  console.log("Gerando Oferta...");
  const offer = generateOffer(specification);

  console.log("Proposta gerada com sucesso!\n");
  console.log(`
    ${presentation}

    ${specification}

    ${offer}
  `);
}

exec();
