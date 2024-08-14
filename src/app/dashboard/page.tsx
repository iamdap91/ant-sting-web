"use client";
import ListGrid from "@/app/components/list-grid";
import useSWR from "swr";
import { fetcher } from "@/app/utils";

const stats = [
  {
    id: 1,
    name: "Transactions every 24 hours",
    value: "총 일자중 점수와 몇 퍼센트가 맞는지 넣을 예정",
  },
  { id: 2, name: "New users annually", value: "총기간 xxxx ~ yyyy" },
  { id: 3, name: "Assets under holding", value: "정확도 n %" },
];

export default function Dashboard() {
  const {
    data: summaries,
    error,
    isLoading,
  } = useSWR("/api/reports?date=2024-08-08", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <div className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
              Score cards
            </h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl leading-8 text-gray-400">
                  AI 증권맨이 말아주는 오늘의 증시 정보.
                </p>
                <p className="text-xl leading-8 text-gray-400">
                  1 ~ 5 점으로 점수를 매깁니다. 점수는 높을수록 좋습니다.
                </p>

                <p className="mt-10 max-w-xl text-base leading-7 text-gray-300">
                  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                  risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                  Id dolor praesent donec est. Odio penatibus risus viverra
                  tellus varius sit neque erat velit. Faucibus commodo massa
                  rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
                  mauris semper sed amet vitae sed turpis id.
                </p>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-64 space-y-8 xl:w-80">
                  {stats.map((stat: any) => (
                    <div
                      key={stat.id}
                      className="flex flex-col-reverse gap-y-4"
                    >
                      <dt className="text-base leading-7 text-gray-400">
                        {stat.name}
                      </dt>
                      <dd className="text-5xl font-semibold tracking-tight text-gray-100">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="py-32 mx-auto max-w-screen-xl">
          <ListGrid />
        </div>
      </div>
    </>
  );
}
