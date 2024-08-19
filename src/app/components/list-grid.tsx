"use client";

import {
  AcademicCapIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Datepicker from "react-tailwindcss-datepicker";
import { useState } from "react";
import useSWR from "swr";
import { format } from "date-fns";

import { classNames, fetcher } from "@/app/utils";
import { ReportSummary } from "../interfaces";
import { reportNameResolver } from "@/app/utils/report-name-resolver";
import { REPORT_SUMMARY_TYPE } from "@/app/constants";
import Link from "next/link";
import { truncateText } from "@/app/utils/truncate-text";
import { figureFontColor } from "@/app/utils/figure-font-color";

const figureIconByType = (type: REPORT_SUMMARY_TYPE) => {
  switch (type) {
    case REPORT_SUMMARY_TYPE.DAILY_MARKET_INFO_REPORT_SUMMARY:
      return <ClockIcon aria-hidden="true" className="h-6 w-6" />;
    case REPORT_SUMMARY_TYPE.DAILY_DEBENTURE_REPORT_SUMMARY:
      return <CheckBadgeIcon aria-hidden="true" className="h-6 w-6" />;
    case REPORT_SUMMARY_TYPE.DAILY_STOCK_REPORT_SUMMARY:
      return <UsersIcon aria-hidden="true" className="h-6 w-6" />;
    case REPORT_SUMMARY_TYPE.DAILY_INDUSTRY_REPORT_SUMMARY:
      return <BanknotesIcon aria-hidden="true" className="h-6 w-6" />;
    case REPORT_SUMMARY_TYPE.DAILY_ECONOMY_REPORT_SUMMARY:
      return <ReceiptRefundIcon aria-hidden="true" className="h-6 w-6" />;
    case REPORT_SUMMARY_TYPE.DAILY_INVEST_REPORT_SUMMARY:
      return <AcademicCapIcon aria-hidden="true" className="h-6 w-6" />;
  }
};

const figureLinkByType = (type: REPORT_SUMMARY_TYPE) => {
  switch (type) {
    case REPORT_SUMMARY_TYPE.DAILY_MARKET_INFO_REPORT_SUMMARY:
      return "/reports/market-info";
    case REPORT_SUMMARY_TYPE.DAILY_DEBENTURE_REPORT_SUMMARY:
      return "/reports/debenture";
    case REPORT_SUMMARY_TYPE.DAILY_STOCK_REPORT_SUMMARY:
      return "/reports/stock";
    case REPORT_SUMMARY_TYPE.DAILY_INDUSTRY_REPORT_SUMMARY:
      return "/reports/industry";
    case REPORT_SUMMARY_TYPE.DAILY_ECONOMY_REPORT_SUMMARY:
      return "/reports/economy";
    case REPORT_SUMMARY_TYPE.DAILY_INVEST_REPORT_SUMMARY:
      return "/reports/invest";
  }
};

export default function ListGrid() {
  const date =
    typeof window !== "undefined"
      ? localStorage.getItem("date")
      : format(new Date(), "yyyy-MM-dd");
  const [value, setValue] = useState({ startDate: date, endDate: date });
  const {
    data: summaries,
    error,
    isLoading,
  } = useSWR<ReportSummary[]>(`/api/reports?date=${value.startDate}`, fetcher);

  const handleValueChange = (newValue: any) => {
    console.log("newValue:", newValue);
    localStorage.setItem("date", newValue.startDate);
    setValue(newValue);
  };

  return (
    <>
      <div className="">
        <Datepicker
          value={value}
          onChange={handleValueChange}
          asSingle={true}
        />
      </div>
      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0 border-2">
        {(summaries || []).map((summary, actionIdx) => {
          const icon = figureIconByType(summary.type);

          return (
            <div
              key={summary._id}
              className={classNames(
                actionIdx === 0
                  ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
                  : "",
                actionIdx === 1 ? "sm:rounded-tr-lg" : "",
                actionIdx === (summaries || []).length - 2
                  ? "sm:rounded-bl-lg"
                  : "",
                actionIdx === (summaries || []).length - 1
                  ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
                  : "",
                "group relative p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500",
              )}
            >
              <div>
                <span
                  className={classNames(
                    "text-teal-700",
                    "bg-teal-50",
                    // action.iconBackground,
                    // action.iconForeground,
                    "inline-flex rounded-lg p-3 ring-4 ring-white",
                  )}
                >
                  {figureIconByType(summary.type)}
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-base font-semibold leading-6 text-gray-100">
                  <Link
                    href={figureLinkByType(summary.type)}
                    className="focus:outline-none"
                  >
                    {/* Extend touch target to entire panel */}
                    <span aria-hidden="true" className="absolute inset-0" />
                    <span>{reportNameResolver(summary.type)} 전망 점수:</span>
                    <span
                      className={classNames(
                        "px-2",
                        figureFontColor(summary?.scoreInfo?.avgScore),
                      )}
                    >
                      {summary?.scoreInfo?.avgScore || "집계중"}
                    </span>
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {truncateText(summary.summary || "집계중")}
                </p>
              </div>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-6 top-6 text-gray-700 group-hover:text-gray-600"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                >
                  <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                </svg>
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}
