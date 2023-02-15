import { ApolloServer } from "@apollo/server";
import { typeDef } from "graphql/scheems";
import { resolver } from "graphql/resolvers";
import { NextApiRequest, NextApiResponse } from "next";
import Cors from "micro-cors";
import { startStandaloneServer } from "@apollo/server/standalone";
import { RequestHandler } from "next/dist/server/next";
const cors = Cors();
const apollo = new ApolloServer({
  typeDefs: typeDef,
  resolvers: resolver,
  // formatError: (err) => {
  //   console.log({ err });
  //   return {
  //     message: err.message,
  //   };
  // },
});
// const server = apollo.start();
export default cors(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  // await server;
  const { url } = await startStandaloneServer(apollo, {
    listen: { path: "/api/graphql" },
  });

  // await apollo.createHandler({
  //   path: "/api/graphql",
  // })(req, res);
} as RequestHandler);
export const config = {
  api: {
    bodyParser: false,
  },
};
