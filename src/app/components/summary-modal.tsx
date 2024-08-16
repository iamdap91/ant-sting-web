import { BaseReport, ScoreInfo } from "@/app/interfaces/base";
import { AiScore, DebentureReport } from "@/app/interfaces";
import { figureFontColor } from "@/app/utils/figure-font-color";
import { DialogTitle } from "@headlessui/react";

export default function SummaryModal({ scoreInfo }: { scoreInfo: ScoreInfo }) {
  return (
    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div className="container p-8">
          <ul role="list" className="divide-y divide-gray-900">
            {(scoreInfo.items || []).map((aiScore: AiScore, index) => (
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
                    <span className={figureFontColor(aiScore.score)}>
                      {aiScore.score}
                    </span>
                  </div>
                </dl>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
