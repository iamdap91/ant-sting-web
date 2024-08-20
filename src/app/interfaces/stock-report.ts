import { BaseReport } from "./base";

export interface StockReport extends BaseReport {
  stockName: string;
  code: string;
  recommendation?: {
    price: number;
    targetPrice: number;
    position: string;
  };
}
