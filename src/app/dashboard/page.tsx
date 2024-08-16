"use client";
import ListGrid from "@/app/components/list-grid";

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
                  1 ~ 5 점으로 점수를 매깁니다. 점수는 높을수록 좋습니다. 설명은 영문에서 한글로 바꾸는것도 작업 예정입니다.
                </p>

                <p className="mt-10 max-w-xl text-base leading-7 text-gray-300">
                  날짜를 조정해서 각 일자의 리포트를 확인해보세요. 투자 망해도
                  책임은 안집니다.
                </p>
                <p className="mt-10 max-w-xl text-base leading-7 text-gray-300">
                  프론트 개발자분들 존경합니다. 리스펙!
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
