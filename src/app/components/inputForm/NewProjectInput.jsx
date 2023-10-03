"use client";

import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";

export default function NewProjectInput() {
  let [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const [info, setInfo] = useState({
    task: "",
    years: "",
    business_area: "",
    service: "",
    region: "",
    company_name: "",
    content: "",
    pm_name: "",
    pic: "",
    cost: 0,
    remarks: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (info) {
      const res = await fetch(`/api/projects`, {
        method: "POST",
        body: JSON.stringify(info),
      });
      if (!res.ok) {
        alert(`등록을 실패하였습니다.`);
      } else {
        router.refresh();
      }
      return res;
    }
    return null;
  };

  return (
    <>
      <div className="inset-0 flex items-center justify-end mx-8 mt-4">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-25 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          New 프로젝트
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <form onSubmit={handleSubmit}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      New 프로젝트
                    </Dialog.Title>

                    <div className="mt-2">
                      <label
                        htmlFor="task"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        전략과제
                      </label>
                      <select
                        id="task"
                        name="task"
                        className="w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                        value={info.task}
                        onChange={(e) => {
                          setInfo((p) => ({
                            ...p,
                            task: e.target.value,
                          }));
                        }}
                      >
                        <option value="">선택</option>
                        <option value="발굴">발굴</option>
                        <option value="육성">육성</option>
                        <option value="성장">성장</option>
                      </select>
                    </div>

                    <div className="mt-2">
                      <label
                        htmlFor="years"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        연도
                      </label>
                      <select
                        id="years"
                        name="years"
                        className="w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                        value={info.years}
                        onChange={(e) => {
                          setInfo((p) => ({
                            ...p,
                            years: e.target.value,
                          }));
                        }}
                      >
                        <option value="">선택</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                      </select>
                    </div>

                    <div className="mt-2">
                      <label
                        htmlFor="business_area"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        사업영역
                      </label>
                      <select
                        id="business_area"
                        name="business_area"
                        className="w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                        value={info.business_area}
                        onChange={(e) => {
                          setInfo((p) => ({
                            ...p,
                            business_area: e.target.value,
                          }));
                        }}
                      >
                        <option value="">선택</option>
                        <option value="혁신바우처">혁신바우처</option>
                        <option value="수출바우처">수출바우처</option>
                        <option value="울산TP">울산TP</option>
                        <option value="포항TP">포항TP</option>
                        <option value="경북TP">경북TP</option>
                        <option value="용역">용역</option>
                        <option value="관광바우처">관광바우처</option>
                        <option value="전통바우처">전통바우처</option>
                        <option value="스타기업">스타기업</option>
                        <option value="Pre스타기업">Pre스타기업</option>
                        <option value="신용보증기금">신용보증기금</option>
                      </select>
                    </div>

                    <div className="mt-2">
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        서비스
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                        value={info.service}
                        onChange={(e) => {
                          setInfo((p) => ({
                            ...p,
                            service: e.target.value,
                          }));
                        }}
                      >
                        <option value="">선택</option>
                        <option value="컨설팅">컨설팅</option>
                        <option value="기술지원">기술지원</option>
                        <option value="마케팅">마케팅</option>
                        <option value="ISO">ISO</option>
                        <option value="교육">교육</option>
                      </select>
                    </div>

                    <div className="mt-2">
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        지역
                      </label>
                      <select
                        id="region"
                        name="region"
                        className="w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                        value={info.region}
                        onChange={(e) => {
                          setInfo((p) => ({
                            ...p,
                            region: e.target.value,
                          }));
                        }}
                      >
                        <option value="">선택</option>
                        <option value="서울">서울</option>
                        <option value="부산">부산</option>
                        <option value="대구">대구</option>
                        <option value="인천">인천</option>
                        <option value="광주">광주</option>
                        <option value="대전">대전</option>
                        <option value="울산">울산</option>
                        <option value="세종">세종</option>
                        <option value="경기">경기</option>
                        <option value="강원">강원</option>
                        <option value="충북">충북</option>
                        <option value="충남">충남</option>
                        <option value="전북">전북</option>
                        <option value="전남">전남</option>
                        <option value="경북">경북</option>
                        <option value="경남">경남</option>
                        <option value="제주">제주</option>
                      </select>
                    </div>

                    <div className="mt-2">
                      <label
                        htmlFor="company_name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        업체 또는 기관명
                      </label>
                      <input
                        type="text"
                        id="company_name"
                        name="company_name"
                        className="w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                        value={info.company_name}
                        onChange={(e) => {
                          setInfo((p) => ({
                            ...p,
                            company_name: e.target.value,
                          }));
                        }}
                      />
                    </div>

                    <div className="mt-2">
                      <label
                        htmlFor="content"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        내용
                      </label>
                      <input
                        type="text"
                        id="content"
                        name="content"
                        className="w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={info.content}
                        onChange={(e) => {
                          setInfo((p) => ({
                            ...p,
                            content: e.target.value,
                          }));
                        }}
                      />
                    </div>

                    <div className="mt-2">
                      <label
                        htmlFor="pm_name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        PM
                      </label>
                      <select
                        id="pm_name"
                        name="pm_name"
                        className="w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={info.pm_name}
                        onChange={(e) => {
                          setInfo((p) => ({
                            ...p,
                            pm_name: e.target.value,
                          }));
                        }}
                      >
                        <option value="">선택</option>
                        <option value="CKP">CKP</option>
                        <option value="CSC">CSC</option>
                        <option value="DHL">DHL</option>
                        <option value="DWK">DWK</option>
                        <option value="GSY">GSY</option>
                        <option value="JHC">JHC</option>
                        <option value="JYP">JYP</option>
                        <option value="YSL">YSL</option>
                        <option value="YSP">YSP</option>
                      </select>
                    </div>

                    <div className="mt-2">
                      <label
                        htmlFor="pic"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        담당자
                      </label>
                      <input
                        type="text"
                        id="pic"
                        name="pic"
                        className="w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={info.pic}
                        onChange={(e) => {
                          setInfo((p) => ({
                            ...p,
                            pic: e.target.value,
                          }));
                        }}
                      />
                    </div>

                    <div className="mt-2">
                      <label
                        htmlFor="cost"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        금액
                      </label>
                      <input
                        type="number"
                        id="cost"
                        name="cost"
                        className="w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={info.cost}
                        onChange={(e) => {
                          setInfo((p) => ({
                            ...p,
                            cost: e.target.value,
                          }));
                        }}
                      />
                    </div>

                    <div className="mt-2">
                      <label
                        htmlFor="remarks"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        비고
                      </label>
                      <input
                        type="text"
                        id="remarks"
                        name="remarks"
                        className="w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={info.remarks}
                        onChange={(e) => {
                          setInfo((p) => ({
                            ...p,
                            remarks: e.target.value,
                          }));
                        }}
                      />
                    </div>

                    <div className="mt-4 text-end">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        등록
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </form>
        </Dialog>
      </Transition>
    </>
  );
}
