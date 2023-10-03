"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function CommentForm() {
  return (
    <div className="w-full px-4 pt-16">
      <h3 className="px-4 pb-2 text-2xl border-b-2 border-b-gray-200">
        히스토리 내역
      </h3>
      <div className="w-full rounded-2xl bg-white p-2">
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-400 focus:outline-none focus-visible:ring focus-visible:ring-gray-600 focus-visible:ring-opacity-75">
                <span>추후 업데이트 예정</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-gray-700`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                comment 입력할 수 있도록 업데이트 예정
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
