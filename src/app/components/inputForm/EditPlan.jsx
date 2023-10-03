"use client";

import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

export default function EditPlan() {
  let [isOpen, setIsOpen] = useState(false);
  const [sales_plan, setSales_plan] = useState(0);
  const [new_discover, setNew_discover] = useState(0);
  const [grow_proj, setGrow_proj] = useState(0);

  const router = useRouter();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    fetch(`/api/plan`, {
      cache: "no-store",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setSales_plan(result.sales_plan);
        setNew_discover(result.new_discover);
        setGrow_proj(result.grow_proj);
      });
  }, []);

  const updateSubmit = (e) => {
    e.preventDefault();
    const sales_plan = e.target.sales_plan.value;
    const new_discover = e.target.new_discover.value;
    const grow_proj = e.target.grow_proj.value;

    fetch(`/api/plan`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sales_plan,
        new_discover,
        grow_proj,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        router.refresh();
        router.replace(`/`);
      });
  };

  return (
    <>
      <div className="inset-0 flex items-center justify-end mx-8 mt-4">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-25 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Plan 수정
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <form onSubmit={updateSubmit}>
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
                      Plan 수정
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
                        value={sales_plan}
                        onChange={(e) => setSales_plan(e.target.value)}
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
                        value={new_discover}
                        onChange={(e) => setNew_discover(e.target.value)}
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
                        value={grow_proj}
                        onChange={(e) => setGrow_proj(e.target.value)}
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
