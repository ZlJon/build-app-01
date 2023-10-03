"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

export default function EditProjectInput() {
  const params = useParams();
  const id = params.id;

  return (
    <div className="inset-0 flex items-center justify-end">
      <Link href={`/projects/${id}/edit`}>
        <button
          title="수정"
          className="rounded-full bg-black bg-opacity-25 px-2 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <PencilSquareIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </Link>
    </div>
  );
}
