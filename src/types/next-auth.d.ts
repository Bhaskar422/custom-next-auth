import { DefaultUser, Session } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user?: DefaultUser & { username?: string };
  }
  interface User extends DefaultUser {
    username?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    username?: string;
  }
}
