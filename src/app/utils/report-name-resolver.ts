import { REPORT_SUMMARY_TYPE } from "@/app/constants";

export const reportNameResolver = (type: REPORT_SUMMARY_TYPE): string => {
  switch (type) {
    case REPORT_SUMMARY_TYPE.DAILY_INVEST_REPORT_SUMMARY:
      return "투자 리포트";
    case REPORT_SUMMARY_TYPE.DAILY_DEBENTURE_REPORT_SUMMARY:
      return "채권 리포트";
    case REPORT_SUMMARY_TYPE.DAILY_ECONOMY_REPORT_SUMMARY:
      return "경제 리포트";
    case REPORT_SUMMARY_TYPE.DAILY_STOCK_REPORT_SUMMARY:
      return "종목 리포트";
    case REPORT_SUMMARY_TYPE.DAILY_INDUSTRY_REPORT_SUMMARY:
      return "산업 리포트";
    case REPORT_SUMMARY_TYPE.DAILY_MARKET_INFO_REPORT_SUMMARY:
      return "시장 리포트";
  }
};
