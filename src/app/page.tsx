import { getServerSession } from "next-auth";

import { authOptions } from "./api/auth/[...nextauth]/route";
import { User } from "./user";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <h1>Session Session</h1>
      <pre>{JSON.stringify(session)}</pre>
      <br />
      <h1>Client Session</h1>
      <User />
    </main>
  );
}
