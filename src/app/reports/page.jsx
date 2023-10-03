export default async function Reports() {
  let date = new Date();
  let year = date.getUTCFullYear();

  const res = await fetch(process.env.API + "monsum", {
    cache: "no-store",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const mon_sum = await res.json();

  return (
    <main>
      <div className="mx-auto max-w-full py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="relative w-full h-fit overflow-hidden rounded-xl border border-solid border-gray-400 opacity-75 shadow-xl">
            <h2 className="m-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {year + "년도"}
            </h2>
            <div className="bg-white py-20 sm:py-20">
              <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <ul
                  role="list"
                  className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
                >
                  {mon_sum.map((data) => (
                    <li key={data.id}>
                      <div className="flex items-center gap-x-6">
                        <div className="text-[20pt]">{data.mon + "월"}</div>
                        <div>
                          <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                            매출액
                          </h3>
                          <p className="text-sm font-semibold leading-6 text-indigo-600">
                            {"₩" +
                              data.cost
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
