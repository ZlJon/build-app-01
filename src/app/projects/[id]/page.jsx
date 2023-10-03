import CommentForm from "@/app/components/comments/CommentForm";
import DelProjectInput from "@/app/components/inputForm/DelProjectInput";
import EditProjectInput from "@/app/components/inputForm/EditProjectInput";

export default async function page(props) {
  const res = await fetch(
    process.env.API + `projectsinquiry/${props.params.id}`,
    {
      cache: "no-store",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
  const content = await res.json();

  return (
    <div className="m-5">
      <div>
        <div className="px-4 sm:px-0">
          <h3 className="flex text-lg font-semibold leading-7 text-gray-900 gap-3 max-[640px]:text-base">
            <span className="text-base max-[640px]:hidden">업체/기관명: </span>
            {content.company_name}
            {/* 발굴 태그 */}
            {content.task === "발굴" ? (
              <span className="flex justify-center items-center text-sm bg-red-200 rounded-full ml-10 w-[60px]">
                {content.task}
              </span>
            ) : null}
            {/* 육성 태그 */}
            {content.task === "육성" ? (
              <span className="flex justify-center items-center text-sm bg-green-200 rounded-full ml-10 w-[60px]">
                {content.task}
              </span>
            ) : null}
            {/* 성장 태그 */}
            {content.task === "성장" ? (
              <span className="flex justify-center items-center text-sm bg-blue-200 rounded-full ml-10 w-[60px]">
                {content.task}
              </span>
            ) : null}
          </h3>
          <p className="flex mt-1 max-w-2xl text-sm leading-6 text-gray-500 gap-3">
            <span className="max-[640px]:hidden">최초 등록일: </span>
            {content.created}
          </p>
          <span className="flex justify-end gap-5">
            <EditProjectInput />
            <DelProjectInput />
          </span>
          {content.status === "미접수" ? (
            <p className="flex justify-center py-2 mt-5 w-full font-medium text-red-700 ring-1 ring-inset ring-red-600/10 rounded-md bg-red-50 ">
              {content.status}
            </p>
          ) : (
            <p className="flex justify-center py-2 mt-5 w-full font-medium text-green-700 ring-1 ring-inset ring-green-600/20 rounded-md bg-green-50 ">
              {content.status}
            </p>
          )}
        </div>

        <div className="mt-6 border-t text-center border-gray-100">
          <div className="divide-y divide-gray-100 border-b-[1px] border-b-gray-200">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <div className="text-base font-medium leading-6 text-gray-900">
                사업영역
              </div>
              <div className="mt-1 text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {content.business_area}
              </div>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <div className="text-base font-medium leading-6 text-gray-900">
                서비스
              </div>
              <div className="mt-1 text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {content.service}
              </div>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <div className="text-base font-medium leading-6 text-gray-900">
                지역
              </div>
              <div className="mt-1 text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {content.region}
              </div>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <div className="text-base font-medium leading-6 text-gray-900">
                PM
              </div>
              <div className="mt-1 text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {content.pm_name}
              </div>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <div className="text-base font-medium leading-6 text-gray-900">
                담당자
              </div>
              <div className="mt-1 text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {content.pic}
              </div>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <div className="text-base font-medium leading-6 text-gray-900">
                금액
              </div>
              <div className="mt-1 text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <span>₩ </span>
                {content.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </div>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <div className="text-base font-medium leading-6 text-gray-900">
                비고
              </div>
              <div className="mt-1 text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {content.remarks}
              </div>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <div className="text-base font-medium leading-6 text-gray-900">
                내용
              </div>
              <div className="mt-1 text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {content.content}
              </div>
            </div>
          </div>
        </div>
      </div>

      <CommentForm />
    </div>
  );
}
