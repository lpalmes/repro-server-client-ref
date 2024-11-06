import { PokemonConfig } from "./pokemon";

export default async function Home() {
  return (
    <main>
      <h1>{PokemonConfig.data.name}</h1>
    </main>
  );
}
