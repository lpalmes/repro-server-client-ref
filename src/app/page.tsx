import { fetchGraphql, graphql } from "@/lib/graphql";
import { Pokemon, PokemonFragment } from "./pokemon";

export const dynamic = "force-dynamic";

export default async function Home() {
  const data = await fetchGraphql(
    graphql(
      `
        query pageQuery {
          getPokemon(pokemon: dragonite) {
            ...PokemonFragment
          }
        }
      `,
      [PokemonFragment]
    ),
    {}
  );
  return (
    <main>
      <Pokemon pokemon={data.getPokemon} />
    </main>
  );
}
