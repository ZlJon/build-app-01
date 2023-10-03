import { getServerSession } from "next-auth";
import LoginForm from "../components/login/LoginForm";
import ReportFrom from "../components/report/ReportForm";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Reports({ children }) {
  const session = await getServerSession(authOptions);
  return !session ? (
    <section>
      <LoginForm />
    </section>
  ) : (
    <section>
      <ReportFrom />
      {children}
    </section>
  );
}
