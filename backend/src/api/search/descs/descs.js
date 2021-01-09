import { prisma } from "../../../../generated/prisma-client";

export default {
    Query: {
        descriptions: async () => {
            const data = await prisma.descriptions();
            return data;
        }
    }
}