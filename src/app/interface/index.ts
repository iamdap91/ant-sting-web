import { REPORT_SUMMARY_TYPE } from "@/app/constants";

export interface AiScore {
  reason: string;
  score: number;
}

export interface ReportSummary {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  date: string;
  type: REPORT_SUMMARY_TYPE;
  scoreInfo: {
    avgScore: number;
    items: AiScore[];
  };
}
