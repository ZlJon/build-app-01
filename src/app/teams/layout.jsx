import { getServerSession } from "next-auth";
import LoginForm from "../components/login/LoginForm";
import { authOptions } from "../api/auth/[...nextauth]/route";
import TeamFrom from "../components/team/TeamForm";

export default async function Teams({ children }) {
  const session = await getServerSession(authOptions);
  return !session ? (
    <section>
      <LoginForm />
    </section>
  ) : (
    <section>
      <TeamFrom />
      {children}
    </section>
  );
}
