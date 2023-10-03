"use client";

import {
  ArrowUturnLeftIcon,
  BackspaceIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Edit() {
  const [company_name, setCompany_name] = useState("");
  const [task, setTask] = useState("");
  const [created, setCreated] = useState("");
  const [status, setStatus] = useState("");
  const [business_area, setBusiness_area] = useState("");
  const [service, setService] = useState("");
  const [region, setRegion] = useState("");
  const [pm_name, setPm_name] = useState("");
  const [pic, setPic] = useState("");
  const [cost, setCost] = useState(0);
  const [remarks, setRemarks] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    fetch(`/api/projectsinquiry/${id}`, {
      cache: "no-store",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setCompany_name(result.company_name);
        setTask(result.task);
        setCreated(result.created);
        setStatus(result.status);
        setBusiness_area(result.business_area);
        setService(result.service);
        setRegion(result.region);
        setPm_name(result.pm_name);
        setPic(result.pic);
        setCost(result.cost);
        setRemarks(result.remarks);
        setContent(result.content);
      });
  }, [id]);

  const updateSubmit = (e) => {
    e.preventDefault();
    const company_name = e.target.company_name.value;
    const task = e.target.task.value;
    const status = e.target.status.value;
    const business_area = e.target.business_area.value;
    const service = e.target.service.value;
    const region = e.target.region.value;
    const pm_name = e.target.pm_name.value;
    const pic = e.target.pic.value;
    const cost = e.target.cost.value;
    const remarks = e.target.remarks.value;
    const content = e.target.content.value;

    fetch(`/api/projectsinquiry/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        company_name,
        task,
        status,
        business_area,
        service,
        region,
        pm_name,
        pic,
        cost,
        remarks,
        content,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        const lastid = result.id;
        router.refresh();
        router.push(`/projects/${lastid}`);
      });
  };

  return (
    <form onSubmit={updateSubmit}>
      <div className="m-5">
        <div>
          <div className="px-4 sm:px-0">
            <h3 className="flex text-lg font-semibold leading-7 text-gray-900 gap-3 max-[640px]:text-base">
              <span className="text-base max-[640px]:hidden">
                업체/기관명:{" "}
              </span>
              <input
                className="w-[200px]"
                type="text"
                name="company_name"
                value={company_name}
                onChange={(e) => setCompany_name(e.target.value)}
              />
              {/* 발굴 태그 */}
              {task === "발굴" ? (
                <span className="flex justify-center items-center text-sm bg-red-200 rounded-full w-[60px]">
                  <select
                    className="bg-red-200 rounded-full"
                    name="task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                  >
                    <option value="발굴">발굴</option>
                    <option value="육성">육성</option>
                    <option value="성장">성장</option>
                  </select>
                </span>
              ) : null}
              {/* 육성 태그 */}
              {task === "육성" ? (
                <span className="flex justify-center items-center text-sm bg-green-200 rounded-full ml-10 w-[60px]">
                  <select
                    className="bg-green-200"
                    name="task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                  >
                    <option value="발굴">발굴</option>
                    <option value="육성">육성</option>
                    <option value="성장">성장</option>
                  </select>
                </span>
              ) : null}
              {/* 성장 태그 */}
              {task === "성장" ? (
                <span className="flex justify-center items-center text-sm bg-blue-200 rounded-full ml-10 w-[60px]">
                  <select
                    className="bg-blue-200"
                    name="task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                  >
                    <option value="발굴">발굴</option>
                    <option value="육성">육성</option>
                    <option value="성장">성장</option>
                  </select>
                </span>
              ) : null}
            </h3>
            <p className="flex mt-1 max-w-2xl text-sm leading-6 text-gray-500 gap-3">
              <span className="max-[640px]:hidden">최초 등록일: </span>
              {created}
            </p>
            <span className="flex justify-end gap-5">
              <div className="inset-0 flex items-center justify-end">
                <button
                  type="submit"
                  title="저장"
                  className="rounded-full bg-green-400 bg-opacity-55 px-2 py-2 text-sm font-medium text-white hover:bg-opacity-75 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-opacity-75"
                >
                  <CheckCircleIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="inset-0 flex items-center justify-end">
                <button
                  type="button"
                  title="수정 취소"
                  className="rounded-full bg-red-400 bg-opacity-55 px-2 py-2 text-sm font-medium text-white hover:bg-opacity-75 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-opacity-75"
                  onClick={() => {
                    router.replace(`/projects/${id}`);
                  }}
                >
                  <ArrowUturnLeftIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </span>
            <span className="flex justify-end gap-5"></span>
            {status === "미접수" ? (
              <p className="flex justify-center py-2 mt-5 w-full font-medium text-red-700 ring-1 ring-inset ring-red-600/10 rounded-md bg-red-50 ">
                <select
                  className="w-full font-bold text-center rounded-full"
                  name="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="미접수">미접수</option>
                  <option value="신규">신규</option>
                  <option value="육성">육성</option>
                  <option value="접수">접수</option>
                  <option value="작성중">작성중</option>
                  <option value="작성완료">작성완료</option>
                  <option value="수행계약대기">수행계약대기</option>
                  <option value="만족도">만족도</option>
                  <option value="검토">검토</option>
                  <option value="보완">보완</option>
                  <option value="계산서">계산서</option>
                  <option value="부가세">부가세</option>
                  <option value="승인">승인</option>
                  <option value="입금">입금</option>
                </select>
              </p>
            ) : (
              <p className="flex justify-center py-2 mt-5 w-full font-medium text-green-700 ring-1 ring-inset ring-green-600/20 rounded-md bg-green-50 ">
                <select
                  className="w-full font-bold text-center rounded-full"
                  name="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="미접수">미접수</option>
                  <option value="신규">신규</option>
                  <option value="육성">육성</option>
                  <option value="접수">접수</option>
                  <option value="작성중">작성중</option>
                  <option value="작성완료">작성완료</option>
                  <option value="수행계약대기">수행계약대기</option>
                  <option value="만족도">만족도</option>
                  <option value="검토">검토</option>
                  <option value="보완">보완</option>
                  <option value="계산서">계산서</option>
                  <option value="부가세">부가세</option>
                  <option value="승인">승인</option>
                  <option value="입금">입금</option>
                </select>
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
                  <select
                    className="text-center"
                    name="business_area"
                    value={business_area}
                    onChange={(e) => setBusiness_area(e.target.value)}
                  >
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
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <div className="text-base font-medium leading-6 text-gray-900">
                  서비스
                </div>
                <div className="mt-1 text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <select
                    className="text-center"
                    name="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  >
                    <option value="컨설팅">컨설팅</option>
                    <option value="기술지원">기술지원</option>
                    <option value="마케팅">마케팅</option>
                    <option value="ISO">ISO</option>
                    <option value="교육">교육</option>
                  </select>
                </div>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <div className="text-base font-medium leading-6 text-gray-900">
                  지역
                </div>
                <div className="mt-1 text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <select
                    className="text-center"
                    name="region"
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                  >
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
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <div className="text-base font-medium leading-6 text-gray-900">
                  PM
                </div>
                <div className="mt-1 text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <select
                    className="text-center"
                    name="pm_name"
                    value={pm_name}
                    onChange={(e) => setPm_name(e.target.value)}
                  >
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
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <div className="text-base font-medium leading-6 text-gray-900">
                  담당자
                </div>
                <div className="mt-1 text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <input
                    className="text-center"
                    type="text"
                    name="pic"
                    value={pic}
                    onChange={(e) => setPic(e.target.value)}
                  />
                </div>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <div className="text-base font-medium leading-6 text-gray-900">
                  금액
                </div>
                <div className="mt-1 text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <span>₩ </span>
                  <input
                    className="text-center"
                    type="number"
                    name="cost"
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                  />
                </div>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <div className="text-base font-medium leading-6 text-gray-900">
                  비고
                </div>
                <div className="mt-1 text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <input
                    className="text-center"
                    type="text"
                    name="remarks"
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
                  />
                </div>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <div className="text-base font-medium leading-6 text-gray-900">
                  내용
                </div>
                <div className="mt-1 text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <textarea
                    className="resize-none w-full max-[640px]:w-[250px] h-[100px] p-2 ring-1 ring-gray-300 rounded-md"
                    name="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
