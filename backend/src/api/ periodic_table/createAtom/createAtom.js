import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
        createAtom: async(_, args) => {
            const { Number, Name, locationX, locationY } = args;
            const atom = await prisma.createAtom({
                Number,
                Name, 
                locationX,
                locationY
            });
            return atom;
        }
    }
}