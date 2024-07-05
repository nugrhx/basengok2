import NextAuth from "next-auth";
import { authOptions } from "./options";
import { PrismaClient } from "@prisma/client";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

