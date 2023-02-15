import { Prisma, User, PrismaClient } from "@prisma/client";
interface userProps {
  name: string;
  email: string;
  password: string;
}
interface emailType {
  email: string;
}
const validateInputs = (props: userProps) => {
  const { name, email, password } = props;
  const errors = [];
  if (!(name.trim().length > 3)) {
    errors.push("name");
  } else if (!(email.trim().length > 3)) {
    errors.push("email");
  } else if (!(password.trim().length > 3)) {
    errors.push("password");
  }
  return errors;
};
export const prisma = new PrismaClient();
export const UserServices = {
  addUsertoDb: async function (props: userProps) {
    try {
      const invalidInputs = validateInputs(props);
      if (invalidInputs.length > 0)
        throw new Error("all the field are required");
      const user = await prisma.user.create({ data: { ...props } });
      return user;
    } catch (e: any) {
      throw new Error(e.message);
    }
  },
  findUserByEmail: async function (props: emailType) {
    const user = await prisma.user.findUnique({ where: { ...props } });
    prisma.$disconnect();
    return user;
  },
  removeUser: async function (email: string) {
    try {
      const d = await prisma.user.delete({ where: { email } });
      return d;
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
  validateUser: async function (props: { email: string; password: string }) {
    const { email, password } = props;
    try {
      const d = await prisma.user.findUnique({ where: { email } });
      if (!d) throw new Error("No user found with details provided");
      return d;
    } catch (e: any) {
      throw new Error(e);
    }
  },
};
