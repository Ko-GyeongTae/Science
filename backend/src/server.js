import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";

const PORT = process.env.PORT || 4000;
const server = new GraphQLServer({ schema });
server.express.use(logger("dev"));

//server.start({ port: PORT }, () => console.log(`✅ Server running on http://localhost:${PORT}`));
server.listen({PORT: process.env.PORT || 4000}).then(({ url }) => {
    console.log(`Server ready at ${url}`);
    console.log(`Server running on port : ${PORT}`);
}) 