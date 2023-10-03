import { getServerSession } from "next-auth";
import LoginForm from "../components/login/LoginForm";
import ProjectFrom from "../components/project/ProjectForm";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Projects({ children }) {
  const session = await getServerSession(authOptions);
  return !session ? (
    <section>
      <LoginForm />
    </section>
  ) : (
    <section>
      <ProjectFrom />
      {children}
    </section>
  );
}
