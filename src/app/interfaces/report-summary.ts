import { REPORT_SUMMARY_TYPE } from "@/app/constants";
import { AiScore } from "./ai-score.interface";

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
