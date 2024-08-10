import { ChartPieIcon } from "@heroicons/react/24/outline";

export const NAVIGATIONS = [
  { name: "Dashboard", href: "#", icon: ChartPieIcon, current: true },
  // { name: "Deployments", href: "#", icon: ServerIcon, current: false },
  // { name: "Activity", href: "#", icon: SignalIcon, current: false },
  // { name: "Domains", href: "#", icon: GlobeAltIcon, current: false },
  // { name: "Usage", href: "#", icon: ChartBarSquareIcon, current: false },
  // { name: "Settings", href: "#", icon: Cog6ToothIcon, current: false },
];

export const TEAM_REPORT_TITLE_HEADER = "Reports";

export const TEAMS = [
  {
    id: 1,
    name: "시황정보 리포트",
    href: "#",
    initial: "시황",
    current: false,
  },
  {
    id: 2,
    name: "투자정보 리포트",
    href: "#",
    initial: "투자",
    current: false,
  },
  {
    id: 3,
    name: "종목정보 리포트",
    href: "#",
    initial: "종목",
    current: false,
  },
  {
    id: 3,
    name: "산업분석 리포트",
    href: "#",
    initial: "산업",
    current: false,
  },
  {
    id: 3,
    name: "경제분석 리포트",
    href: "#",
    initial: "경제",
    current: false,
  },
  {
    id: 3,
    name: "채권분석 리포트",
    href: "#",
    initial: "채권",
    current: false,
  },
];
