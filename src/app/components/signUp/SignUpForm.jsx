"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUpForm() {
  const [member, setMember] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (member) {
      const res = await fetch(`/api/register`, {
        method: "POST",
        body: JSON.stringify(member),
      });
      if (!res.ok) {
        alert(`${member.email}은 이미 존재합니다.`);
      } else {
        alert("가입을 완료하였습니다.");
        router.replace("/");
      }
      return res;
    }
    return null;
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            회원가입
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                성명
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={member.name}
                  onChange={(e) => {
                    setMember((p) => ({ ...p, name: e.target.value }));
                  }}
                  autoComplete="name"
                  placeholder="이름 입력"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                이메일
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={member.email}
                  onChange={(e) => {
                    setMember((p) => ({ ...p, email: e.target.value }));
                  }}
                  autoComplete="email"
                  placeholder="사용하실 이메일 입력"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6  text-gray-900"
                >
                  비밀번호
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={member.password}
                  onChange={(e) => {
                    setMember((p) => ({ ...p, password: e.target.value }));
                  }}
                  autoComplete="off"
                  placeholder="사용하실 비번 입력"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="passwordChk"
                  className="block text-sm font-medium leading-6  text-gray-900"
                >
                  비밀번호 재입력
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="passwordChk"
                  name="passwordChk"
                  type="password"
                  autoComplete="off"
                  placeholder="사용하실 비번이 맞는지 확인용"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                연락처
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={member.phone}
                  onChange={(e) => {
                    setMember((p) => ({ ...p, phone: e.target.value }));
                  }}
                  autoComplete="off"
                  placeholder="연락처 입력('-'은 제외하고 입력)"
                  maxLength={11}
                  minLength={10}
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                가입하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
