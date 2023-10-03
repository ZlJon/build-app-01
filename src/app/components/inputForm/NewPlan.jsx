"use client";

import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";

export default function NewPlan() {
  let [isOpen, setIsOpen] = useState(false);

  let date = new Date();
  let year = date.getUTCFullYear();

  const router = useRouter();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const [info, setInfo] = useState({
    years: year,
    sales_plan: 0,
    new_discover: 0,
    grow_proj: 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (info) {
      const res = await fetch(`/api/plan`, {
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
          New Plan
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
                      New Plan
                    </Dialog.Title>

                    <div className="mt-2">
                      <label
                        htmlFor="sales_plan"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        매출
                      </label>
                      <input
                        type="number"
                        id="sales_plan"
                        name="sales_plan"
                        className="w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                        value={info.sales_plan}
                        onChange={(e) => {
                          setInfo((p) => ({
                            ...p,
                            sales_plan: e.target.value,
                          }));
                        }}
                      />
                    </div>

                    <div className="mt-2">
                      <label
                        htmlFor="new_discover"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        신규 발굴
                      </label>
                      <input
                        type="number"
                        id="new_discover"
                        name="new_discover"
                        className="w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={info.new_discover}
                        onChange={(e) => {
                          setInfo((p) => ({
                            ...p,
                            new_discover: e.target.value,
                          }));
                        }}
                      />
                    </div>

                    <div className="mt-2">
                      <label
                        htmlFor="grow_proj"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        육성
                      </label>
                      <input
                        type="number"
                        id="grow_proj"
                        name="grow_proj"
                        className="w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={info.grow_proj}
                        onChange={(e) => {
                          setInfo((p) => ({
                            ...p,
                            grow_proj: e.target.value,
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
