import { prisma } from "../../../../generated/prisma-client";

export default {
    Query: {
        atoms: async () => {
            const data = await prisma.atoms();
            return data;
        },
        atom: async (_,{name}) => {
            const data = await prisma.atoms();
            return data.find(o => o.Name === name);
        }
    }
}