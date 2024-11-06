import { TadaDocumentNode, initGraphQLTada } from "gql.tada";
import { print } from "graphql";
import type { introspection } from "../graphql-env";

const endpoint = "https://graphqlpokemon.favware.tech/v8";

export async function fetchGraphql<Result = any, Variables = any>(
  query: TadaDocumentNode<Result, Variables>,
  variables: Variables
): Promise<Result> {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: print(query),
      variables,
    }),
    cache: "no-store",
  });
  const body = await response.json();
  if (body.errors) {
    throw body.errors[0];
  }

  return body.data;
}

export const graphql = initGraphQLTada<{
  introspection: introspection;
}>();

export { readFragment } from "gql.tada";
export type { FragmentOf, ResultOf, VariablesOf } from "gql.tada";
