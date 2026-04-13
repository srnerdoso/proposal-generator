export async function getDetailsService() {
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