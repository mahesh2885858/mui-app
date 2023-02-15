import { UserServices, prisma } from "services/user";

export const resolver = {
  Query: {
    findUser: async (_parent: any, args: any, ctx: any) => {
      return await UserServices.findUserByEmail({ ...args });
    },
  },
  Mutation: {
    createUser: async (_parent: any, _args: any, ctx: any) => {
      try {
        // in the args props you will get the variables passed from the client
        // add details to database and return it\
        const data: any = await UserServices.addUsertoDb({ ..._args });
        return data;
      } catch (e: any) {
        throw new Error(e.message);
      }
    },
    removeUser: async (_parent: any, _args: any, ctx: any) => {
      const { email } = _args;
      try {
        const data = await UserServices.removeUser(email);
        await prisma.$disconnect();
        return data;
      } catch (err: any) {
        throw new Error(err.message);
      }
    },
    loginUser: async (_parent: any, _args: any, ctx: any) => {
      try {
        const data = await UserServices.validateUser({ ..._args });
        await prisma.$disconnect();
        return data;
      } catch (e: any) {
        throw new Error(e.message);
      }
    },
  },
};
