"use client";

import { useParams, useRouter } from "next/navigation";
import { TrashIcon } from "@heroicons/react/24/outline";

export default function DelProjectInput() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;

  return (
    <div className="inset-0 flex items-center justify-end">
      <button
        title="삭제"
        className="rounded-full bg-black bg-opacity-25 px-2 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        type="button"
        onClick={() => {
          if (confirm("정말로 삭제하시겠습니까?")) {
            fetch(`/api/projectsinquiry/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then(() => {
                router.replace("/projects");
                router.refresh();
              });
          }
        }}
      >
        <TrashIcon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
}
