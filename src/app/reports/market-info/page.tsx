"use client";

import useSWR from "swr";
import { useState } from "react";
import { format } from "date-fns";
import Datepicker from "react-tailwindcss-datepicker";
import { classNames, fetcher } from "@/app/utils";
import { DocumentArrowDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { AiScore, MarketInfoReport } from "@/app/interfaces";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { figureFontColor } from "@/app/utils/figure-font-color";
import { ScoreInfo } from "@/app/interfaces/base";
import { joinUrl } from "@/app/utils/joinUrl";
import { N_PAY_RESEARCH_URL } from "@/app/constants";
import Link from "next/link";
import { opinionFontStyle } from "@/app/utils/opinion-font-style";

export default function MarketInfoPage() {
  const date =
    typeof window !== "undefined"
      ? localStorage.getItem("date")
      : format(new Date(), "yyyy-MM-dd");
  const [value, setValue] = useState({ startDate: date, endDate: date });
  const [open, setOpen] = useState(false);
  const [scoreInfo, setScoreInfo] = useState<ScoreInfo>();

  const {
    data: reports,
    error,
    isLoading,
  } = useSWR(`/api/market-info-reports?date=${value.startDate}`, fetcher);

  const handleValueChange = (newValue: any) => {
    console.log("newValue:", newValue);
    localStorage.setItem("date", newValue.startDate);
    setValue(newValue);
  };

  if (error) <div>failed to load data</div>;

  return (
    <div className="container p-8">
      <div className="container p-8">
        <Datepicker
          value={value}
          onChange={handleValueChange}
          asSingle={true}
        />
      </div>
      <div className="bg-gray-900">
        <div className="mx-auto">
          <div className="bg-gray-900 py-10">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                  <h1 className="text-base font-semibold leading-6 text-white">
                    시황 정보
                  </h1>
                  {/*<p className="mt-2 text-sm text-gray-300">*/}
                  {/*  각 종목별 주가와 목표주가, 전망에 대해 다룹니다.*/}
                  {/*</p>*/}
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none"></div>
              </div>
              <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table className="min-w-full divide-y divide-gray-700">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                          >
                            리포트 제목
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                          >
                            증권사
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                          >
                            일자
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                          >
                            Score
                          </th>
                          <th
                            scope="col"
                            className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                          >
                            <span className="sr-only">Reasons</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-800">
                        {(reports || []).map(
                          (report: MarketInfoReport, idx: number) => (
                            <tr key={report._id}>
                              <td className="whitespace-nowrap px-12 py-4 text-sm text-gray-300 hover:underline">
                                <Link
                                  href={joinUrl(
                                    N_PAY_RESEARCH_URL,
                                    report.detailUrl,
                                  )}
                                  target="_blank"
                                  className="text-sm font-semibold leading-6 text-gray-100"
                                >
                                  {report.title}
                                </Link>
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-400">
                                {report.stockFirm}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-400">
                                {report.date}
                              </td>
                              <td
                                className={classNames(
                                  "whitespace-nowrap px-3 py-4 text-sm",
                                  figureFontColor(report.scoreInfo?.avgScore),
                                )}
                              >
                                {report.scoreInfo?.avgScore}
                              </td>
                              <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                <button
                                  type="button"
                                  className="rounded-full px-3 py-1.5 text-sm font-semibold text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-400"
                                  onClick={() => {
                                    setScoreInfo(reports[idx].scoreInfo);
                                    setOpen(true);
                                  }}
                                >
                                  <span>Reasons</span>
                                </button>
                              </td>
                              <td className="p-4">
                                <a href={report.file}>
                                  <DocumentArrowDownIcon
                                    aria-hidden="true"
                                    className="h-6 w-6 text-gray-600 hover:cursor-copy"
                                  />
                                </a>
                              </td>
                            </tr>
                          ),
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <DialogPanel
                transition
                className="pointer-events-auto w-screen max-w-2xl transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
              >
                <div className="flex h-full flex-col overflow-y-scroll bg-gray-900 py-6 shadow-xl">
                  <div className="px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <DialogTitle className="text-base font-semibold leading-6 text-gray-900">
                        Panel title
                      </DialogTitle>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="relative rounded-md bg-gray-900 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          <span className="absolute -inset-2.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative mt-6 flex-1 px-4 sm:px-6">
                    {/* Your content */}
                    <div className="container p-8">
                      <ul role="list" className="divide-y divide-gray-900">
                        {(scoreInfo?.items || []).map(
                          (aiScore: AiScore, index: number) => (
                            <li
                              key={index}
                              className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-5 sm:flex-nowrap"
                            >
                              <div>
                                <p className="text-sm font-semibold leading-6 text-gray-100">
                                  <span className="">{aiScore.reason}</span>
                                </p>
                              </div>
                              <dl className="flex w-full flex-none justify-between gap-x-8 sm:w-auto">
                                <div className="flex -space-x-0.5">
                                  <span
                                    className={figureFontColor(aiScore.score)}
                                  >
                                    {aiScore.score}
                                  </span>
                                </div>
                              </dl>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
