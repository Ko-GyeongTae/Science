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
    },
    Description: {
        id: data => data.id,
        Subtitle: data=> data.Subtitle,
        Text: data => data.Text,
        From: data => data.From,
        Author: data => data.Author
    }
}