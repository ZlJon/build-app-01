import Link from "next/link";
import NewProjectInput from "../components/inputForm/NewProjectInput";

export default async function ProjectList() {
  const res = await fetch(process.env.API + "projects", {
    cache: "no-store",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const list = await res.json();

  const res2 = await fetch(process.env.API + "projectsfoster", {
    cache: "no-store",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const foster = await res2.json();

  const res3 = await fetch(process.env.API + "projectsgrow", {
    cache: "no-store",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const grow = await res3.json();

  return (
    <div className="relative w-full flex flex-col shadow-lg mb-6 max-[1280px]:text-base max-[1064px]:text-xs max-[728px]:text-xs  max-[500px]:text-xs">
      <NewProjectInput />
      <div className="block bg-transparent m-4 p-4 overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="border border-solid border-l-0 ">
              <th className="px-6 py-3">전략과제</th>
              <th className="px-6 py-3">연도</th>
              <th className="px-6 py-3">사업영역</th>
              <th className="px-6 py-3">서비스</th>
              <th className="px-6 py-3">지역</th>
              <th className="px-6 py-3">업체/기관명</th>
              <th className="px-6 py-3">내용</th>
              <th className="px-6 py-3">PM</th>
              <th className="px-6 py-3">담당자</th>
              <th className="px-6 py-3">금액</th>
              <th className="px-6 py-3">비고</th>
              <th className="px-6 py-3">상태</th>
            </tr>
          </thead>
          <tbody>
            {list.map((list) => {
              return (
                <tr key={list.id}>
                  <td className="px-2 py-2 text-center bg-red-200 font-bold">
                    {list.task}
                  </td>
                  <td className="px-2 py-2 text-center">{list.years}</td>
                  <td className="px-2 py-2 text-center">
                    {list.business_area}
                  </td>
                  <td className="px-6 py-2 text-center">{list.service}</td>
                  <td className="px-6 py-2 text-center">{list.region}</td>
                  <td className="px-6 py-2 text-center font-bold">
                    <Link href={`/projects/${list.id}`}>
                      {list.company_name}
                    </Link>
                  </td>
                  <td className="px-6 py-2 text-center">{list.content}</td>
                  <td className="px-6 py-2 text-center">{list.pm_name}</td>
                  <td className="px-6 py-2 text-center">{list.pic}</td>
                  <td className="px-6 py-2 text-center">
                    {list.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </td>
                  <td className="px-6 py-2 text-center">{list.remarks}</td>
                  <td className="px-6 py-2 text-center">{list.status}</td>
                </tr>
              );
            })}
          </tbody>

          <tbody>
            {foster.map((list) => {
              return (
                <tr key={list.id}>
                  <td className="px-2 py-2 text-center bg-green-200 font-bold">
                    {list.task}
                  </td>
                  <td className="px-2 py-2 text-center">{list.years}</td>
                  <td className="px-2 py-2 text-center">
                    {list.business_area}
                  </td>
                  <td className="px-6 py-2 text-center">{list.service}</td>
                  <td className="px-6 py-2 text-center">{list.region}</td>
                  <td className="px-6 py-2 text-center font-bold">
                    <Link href={`/projects/${list.id}`}>
                      {list.company_name}
                    </Link>
                  </td>
                  <td className="px-6 py-2 text-center">{list.content}</td>
                  <td className="px-6 py-2 text-center">{list.pm_name}</td>
                  <td className="px-6 py-2 text-center">{list.pic}</td>
                  <td className="px-6 py-2 text-center">
                    {list.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </td>
                  <td className="px-6 py-2 text-center">{list.remarks}</td>
                  <td className="px-6 py-2 text-center">{list.status}</td>
                </tr>
              );
            })}
          </tbody>

          <tbody>
            {grow.map((list) => {
              return (
                <tr key={list.id}>
                  <td className="px-2 py-2 text-center bg-blue-200 font-bold">
                    {list.task}
                  </td>
                  <td className="px-2 py-2 text-center">{list.years}</td>
                  <td className="px-2 py-2 text-center">
                    {list.business_area}
                  </td>
                  <td className="px-6 py-2 text-center">{list.service}</td>
                  <td className="px-6 py-2 text-center">{list.region}</td>
                  <td className="px-6 py-2 text-center font-bold">
                    <Link href={`/projects/${list.id}`}>
                      {list.company_name}
                    </Link>
                  </td>
                  <td className="px-6 py-2 text-center">{list.content}</td>
                  <td className="px-6 py-2 text-center">{list.pm_name}</td>
                  <td className="px-6 py-2 text-center">{list.pic}</td>
                  <td className="px-6 py-2 text-center">
                    {list.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </td>
                  <td className="px-6 py-2 text-center">{list.remarks}</td>
                  <td className="px-6 py-2 text-center">{list.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
