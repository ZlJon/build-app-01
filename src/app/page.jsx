import { getServerSession } from "next-auth";
import DashboardFrom from "./components/dashboard/DashboardForm";
import { authOptions } from "./api/auth/[...nextauth]/route";
import LoginForm from "./components/login/LoginForm";
import NewPlan from "./components/inputForm/NewPlan";
import EditPlan from "./components/inputForm/EditPlan";

export default async function Home() {
  /* 필드에 메모지형태로 자유롭게 움직일 수 있음 */
  const session = await getServerSession(authOptions);

  let date = new Date();
  let year = date.getUTCFullYear().toString();

  const res = await fetch(process.env.API + "plan", {
    cache: "no-store",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const plan = await res.json();

  const res2 = await fetch(process.env.API + "sum", {
    cache: "no-store",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const achieve = await res2.json();

  const res3 = await fetch(process.env.API + "achievenew", {
    cache: "no-store",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const achieve2 = await res3.json();

  const res4 = await fetch(process.env.API + "achievegrow", {
    cache: "no-store",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const achieve3 = await res4.json();

  let achieve_rate = achieve.achieve / plan.sales_plan;
  let achieve_rate2 = achieve2.achieve_new / plan.new_discover;
  let achieve_rate3 = achieve3.achieve_grow / plan.grow_proj;

  return !session ? (
    <section>
      <LoginForm />
    </section>
  ) : (
    <section>
      <DashboardFrom />
      <main>
        {plan.years !== year ? <NewPlan /> : <EditPlan />}
        <div className="mx-auto max-w-full py-2 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="relative w-full h-fit overflow-hidden rounded-xl border border-dashed border-gray-400 opacity-75">
              <div className="bg-white py-10 sm:py-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <div className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                      <div className="text-xl leading-7 text-gray-600">
                        <p>
                          목표:{" "}
                          {"₩" +
                            plan.sales_plan
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </p>
                        <p>
                          달성:{" "}
                          {"₩" +
                            achieve.achieve
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </p>
                        <p className="mt-5 text-2xl">
                          달성률: {achieve_rate.toFixed(1) + "%"}
                        </p>
                      </div>
                      <div className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        매출
                      </div>
                    </div>
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                      <div className="text-xl leading-7 text-gray-600">
                        <p>목표: {plan.new_discover}</p>
                        <p>달성: {achieve2.achieve_new}</p>
                        <p className="mt-5 text-2xl">
                          달성률: {achieve_rate2.toFixed(1) + "%"}
                        </p>
                      </div>
                      <div className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        신규 발굴
                      </div>
                    </div>
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                      <div className="text-xl leading-7 text-gray-600">
                        <p>목표: {plan.grow_proj}</p>
                        <p>달성: {achieve3.achieve_grow}</p>
                        <p className="mt-5 text-2xl">
                          달성률: {achieve_rate3.toFixed(1) + "%"}
                        </p>
                      </div>
                      <div className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        육성
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
