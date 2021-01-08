import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
        createInfo: async(_, args) => {
            const { name, Subtitle, Text, From, Author = "" } = args;
            const info = await prisma.createInfo({
                name,
                Subtitle,
                Text,
                From,
                Author
            });
            return info;
        }
    }
}