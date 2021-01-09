import { prisma } from "../../../../generated/prisma-client";

export default {
    Query: {
        atom: async (_,{number}) => {
            const data = await prisma.atoms();
            return data.find(o => o.Number === number);
        }
    }
}