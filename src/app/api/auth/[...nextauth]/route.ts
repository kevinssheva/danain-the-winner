import NextAuth, { NextAuthOptions } from "next-auth";
import { prisma } from "../../../lib/prisma";
import { compare } from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

interface Credentials {
    email: string;
    password: string;
}

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            type: "credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "Email",
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Password",
                }
            },
            authorize: async (credentials) => {
                try {
                    const { email, password } = credentials as Credentials;

                    if (!email || !password) {
                        throw new Error("Email and password are required");
                    }

                    const user = await prisma.user.findUnique({
                        where: {
                            email,
                        },
                    });

                    if (!user) {
                        throw new Error("User not found");
                    }

                    const isPasswordValid = await compare(password, user.password);

                    if (!isPasswordValid) {
                        throw new Error("Invalid password");
                    }

                    return user;
                } catch (error) {
                    throw new Error(`Authentication failed: ${error}`);
                }
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            profile: async (profile) => {
                const user = await prisma.user.findUnique({
                    where: {
                        email: profile.email,
                    },
                });

                if (!user) {
                    const createUser = await prisma.user.create({
                        data: {
                            email: profile.email,
                            fullName: profile.name,
                            profilePicture: profile.image,
                            password: "googleaccountonly123321danain1stplacewinner",
                            role: "UNREGISTERED",
                        },
                    });

                    return createUser;
                }

                return user;
            }
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID as string,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
            profile: async (profile) => {
                const user = await prisma.user.findUnique({
                    where: {
                        email: profile.email,
                    },
                });

                if (!user) {
                    const createUser = await prisma.user.create({
                        data: {
                            email: profile.email,
                            fullName: profile.name,
                            profilePicture: profile.image,
                            password: "facebookaccountonly123321danain1stplacewinner",
                            role: "UNREGISTERED",
                        },
                    });

                    return createUser;
                }

                return user;
            }
        })
    ],
    pages: {
        signIn: "/login",
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user && user.id) {
                token.uid = user.id as string;

                const userData = await prisma.user.findUnique({
                    where: {
                        id: user.id
                    },
                    select: {
                        role: true
                    }
                });

                token.role = userData?.role;
            }

            return token;
        },
        session: async ({ session, token }) => {
            const userData = await prisma.user.findUnique({
                where: {
                    id: token.uid as string
                },
                select: {
                    id: true,
                    fullName: true,
                    email: true,
                    role: true
                }
            });

            if (token?.uid && userData) {
                session.user = userData;
            }

            return session;
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
