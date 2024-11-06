"use client";

import { FragmentOf, graphql, readFragment } from "@/lib/graphql";

export const PokemonFragment = graphql(`
  fragment PokemonFragment on Pokemon {
    species
    color
  }
`);

type Props = {
  pokemon: FragmentOf<typeof PokemonFragment>;
};

export function Pokemon(props: Props) {
  const pokemon = readFragment(PokemonFragment, props.pokemon);

  return (
    <div>
      <h1>Species: {pokemon.species}</h1>
      <p>Color: {pokemon.color}</p>
    </div>
  );
}
