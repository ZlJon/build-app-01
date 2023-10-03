import { BarsArrowDownIcon } from "@heroicons/react/24/outline";

export default async function TeamList() {
  const res = await fetch(process.env.API + "members", {
    cache: "no-store",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const list = await res.json();
  return (
    <div className="relative w-full flex flex-col shadow-lg mb-6">
      <div className="block bg-transparent m-4 p-4 overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="border border-solid border-l-0 ">
              <th className="px-6 py-3">이름</th>
              <th className="px-6 py-3">이메일</th>
              <th className="px-6 py-3">연락처</th>
              <th className="px-6 py-3">가입일</th>
              <th className="px-6 py-3">직급</th>
            </tr>
          </thead>
          <tbody>
            {list.map((list) => {
              return (
                <tr key={list.id}>
                  <td className="px-6 py-2 text-center">{list.name}</td>
                  <td className="px-6 py-2 text-center ">{list.email}</td>
                  <td className="px-6 py-2 text-center">{list.phone}</td>
                  <td className="px-6 py-2 text-center">{list.created}</td>
                  <td className="px-6 py-2 text-center">{list.ranking}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
