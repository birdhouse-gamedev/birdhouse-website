import { GraphQLClient } from "graphql-request";
import { getSdk as getApiSdk } from "../generated/api";

const graphqlEndpoint = process.env.GRAPHQL_ENDPOINT ?? "http://localhost:3000/graphql";

const apiClient = new GraphQLClient(graphqlEndpoint);
export const api = getApiSdk(apiClient);
