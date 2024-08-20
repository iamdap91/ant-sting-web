"use client";

import ListGrid from "@/app/components/list-grid";

const stats = [
  {
    id: 1,
    name: "Transactions every 24 hours",
    value: "검증로직 어떻게 넣을지 짱구 굴리는중...",
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
                <div className="text-xl leading-8 text-gray-400">
                  <p>1 ~ 5 점으로 점수를 매깁니다. 점수는 높을수록 좋습니다.</p>
                  <p>
                    종목 정보 리포트의 애널리스트 의견과 조합해서 보는 걸
                    추천드립니다.
                  </p>
                  {/*<p>날짜를 조정해서 각 일자의 리포트를 확인해보세요.</p>*/}
                </div>

                <div className="mt-10 max-w-xl text-base leading-7 text-gray-300">
                  <p>기본적으로 AI 증권맨은 보수적인 편입니다.</p>
                  <p>
                    대시보드상에서 뭉뚱그린 점수보다 개별 리포트들의 점수가 좀
                    더 신뢰도가 높아보이니 개별 리포트 점수를 확인하는걸
                    추천드리빈다.
                  </p>
                  <p className="py-2">
                    무료 한글 AI 모델은 나사가 반쯤 빠져있어서, 어쩔 수 없이
                    영문 모델 사용중입니다. 나중에 고도화하면 유료모델
                    붙이는것도 고민중입니다.
                  </p>
                </div>
                <div className="mt-10 max-w-xl text-base leading-7 text-gray-300">
                  <p>
                    프론트 너무 힘들었어요. 프론트 개발자분들 존경합니다.
                    리스펙!
                  </p>
                  <p>혹시 같이 만드실분 계시면 슬랙 DM 주세요</p>
                </div>
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
