import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();
  return (
    <>
      <div>Landing Page</div>
      {session?.user ? <div>loggedIn user</div> : <div>Not LoggedIn User</div>}
    </>
  );
}
