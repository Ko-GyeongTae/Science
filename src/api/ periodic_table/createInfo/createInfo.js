import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
        createInfo: async(_, args) => {
            const { atom, Subtitle, Text, From, Author="" } = args;
            const info = await prisma.createAtom({
                atom,
                Subtitle,
                Text,
                From,
                Author
            });
            return info;
        }
    }
}