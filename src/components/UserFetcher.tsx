import { authOptions } from "../app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

export interface UserSession {
    id: string;
    fullName: string;
    email: string;
    role: string;
}

interface UserFetcherProps {
    children: ({ user }: { user: UserSession | null }) => JSX.Element;
}

export default async function UserFetcher({ children }: UserFetcherProps) {
    const session = await getServerSession(authOptions);

    const user = session?.user as UserSession;

    // Pass the user data as props to the child components
    return children({ user });
}
