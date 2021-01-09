import { prisma } from "../../../../generated/prisma-client";

export default {
    Query: {
        atom: async (_,{Name}) => {
            const data = await prisma.atoms();
            return data.find(o => o.Name === Name);
        }
    }
}