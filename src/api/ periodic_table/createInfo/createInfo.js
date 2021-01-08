import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
        createDescription: async(_, args) => {
            const {name, Subtitle, Text, From, Author} = args;
            const info = await prisma.createDescription({
                name,
                Subtitle,
                Text,
                From,
                Author
            });
            return info;
        },
    }
}