import { prisma } from "../../../../generated/prisma-client";

export default {
    Query: {
        atoms: async () => {
            const data = await prisma.atoms();
            return data;
        },
        descriptions: async() => {
            const data = await prisma.descriptions();
            return data;
        }
    }
}