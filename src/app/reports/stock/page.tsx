"use client";

import useSWR from "swr";
import { useState } from "react";
import { format } from "date-fns";
import Datepicker from "react-tailwindcss-datepicker";
import { fetcher } from "@/app/utils";
import {
  CheckIcon,
  DocumentArrowDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { AiScore, StockReport } from "@/app/interfaces";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { figureFontColor } from "@/app/utils/figure-font-color";
import { ScoreInfo } from "@/app/interfaces/base";
import Link from "next/link";
import { joinUrl } from "@/app/utils/joinUrl";
import { N_PAY_RESEARCH_URL } from "@/app/constants";

export default function StockPage() {
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
  } = useSWR(`/api/stock-reports?date=${value.startDate}`, fetcher);

  const handleValueChange = (newValue: any) => {
    console.log("newValue:", newValue);
    localStorage.setItem("date", newValue.startDate);
    setValue(newValue);
  };

  if (error) <div>failed to load data</div>;

  return (
    <>
      <div className="container p-8">
        <Datepicker
          value={value}
          onChange={handleValueChange}
          asSingle={true}
        />
        <div className="container p-8">
          {reports?.length === 0 ? <div>조회 결과가 음슴</div> : ""}

          <ul role="list" className="divide-y divide-gray-900">
            {(reports || []).map((report: StockReport, idx: number) => (
              <li
                key={report._id}
                className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-5 sm:flex-nowrap"
              >
                <div>
                  <Link
                    href={joinUrl(N_PAY_RESEARCH_URL, report.detailUrl)}
                    target="_blank"
                    className="text-sm font-semibold leading-6 text-gray-100"
                  >
                    <span
                      className="hover:underline cursor-grab"
                      onClick={() => {
                        setScoreInfo(reports[idx].scoreInfo);
                        setOpen(true);
                      }}
                    >
                      {report.title}
                    </span>
                  </Link>
                  <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                    <p>{report.stockFirm}</p>
                    <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                      <circle r={1} cx={1} cy={1} />
                    </svg>
                    <p>
                      <time dateTime={report.date}>{report.date}</time>
                    </p>
                  </div>
                </div>
                <dl className="flex w-full flex-none justify-between gap-x-8 sm:w-auto">
                  <div className="flex -space-x-0.5">
                    <span
                      className={figureFontColor(report?.scoreInfo?.avgScore)}
                    >
                      {report?.scoreInfo?.avgScore || "-"}
                    </span>
                  </div>
                  <div className="flex w-16 gap-x-2.5">
                    <dt>
                      <button
                        type="button"
                        className="rounded-full px-3 py-1.5 text-sm font-semibold text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-400"
                        onClick={() => {
                          setScoreInfo(reports[idx].scoreInfo);
                          setOpen(true);
                        }}
                      >
                        <span>Detail</span>
                      </button>
                    </dt>
                    <dt>
                      <a href={report.file}>
                        <DocumentArrowDownIcon
                          aria-hidden="true"
                          className="h-6 w-6 text-gray-600 hover:cursor-copy"
                        />
                      </a>
                    </dt>
                  </div>
                </dl>
              </li>
            ))}
          </ul>
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
                                    <span className="hover:underline cursor-grab">
                                      {aiScore.reason}
                                    </span>
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
    </>
  );
}
