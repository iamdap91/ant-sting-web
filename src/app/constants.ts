export enum REPORT_SUMMARY_TYPE {
  DAILY_INVEST_REPORT_SUMMARY = "DAILY_INVEST_REPORT_SUMMARY",
  DAILY_DEBENTURE_REPORT_SUMMARY = "DAILY_DEBENTURE_REPORT_SUMMARY",
  DAILY_ECONOMY_REPORT_SUMMARY = "DAILY_ECONOMY_REPORT_SUMMARY",
  DAILY_STOCK_REPORT_SUMMARY = "DAILY_STOCK_REPORT_SUMMARY",
  DAILY_INDUSTRY_REPORT_SUMMARY = "DAILY_INDUSTRY_REPORT_SUMMARY",
  DAILY_MARKET_INFO_REPORT_SUMMARY = "DAILY_MARKET_INFO_REPORT_SUMMARY",
}

import { ChartPieIcon } from "@heroicons/react/24/outline";

export const NAVIGATIONS = [
  { name: "Dashboard", href: "/dashboard", icon: ChartPieIcon, current: false },
  // { name: "Deployments", href: "#", icon: ServerIcon, current: false },
  // { name: "Activity", href: "#", icon: SignalIcon, current: false },
  // { name: "Domains", href: "#", icon: GlobeAltIcon, current: false },
  // { name: "Usage", href: "#", icon: ChartBarSquareIcon, current: false },
  // { name: "Settings", href: "#", icon: Cog6ToothIcon, current: false },
];

export const TEAM_REPORT_TITLE_HEADER = "Reports";

export const REPORT_NAVIGATIONS = [
  {
    id: 1,
    name: "시황정보 리포트",
    href: "/reports/market-info",
    initial: "시황",
    current: false,
  },
  {
    id: 2,
    name: "투자정보 리포트",
    href: "/reports/invest",
    initial: "투자",
    current: false,
  },
  {
    id: 3,
    name: "종목정보 리포트",
    href: "/reports/stock",
    initial: "종목",
    current: false,
  },
  {
    id: 3,
    name: "산업분석 리포트",
    href: "/reports/industry",
    initial: "산업",
    current: false,
  },
  {
    id: 3,
    name: "경제분석 리포트",
    href: "/reports/economy",
    initial: "경제",
    current: false,
  },
  {
    id: 3,
    name: "채권분석 리포트",
    href: "/reports/debenture",
    initial: "채권",
    current: false,
  },
];
