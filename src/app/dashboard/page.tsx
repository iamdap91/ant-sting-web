"use client";
import { useState } from "react";

export default function Dashboard() {
  const [value, onChange] = useState(new Date());

  return (
    <>
      {/*<div className="flex items-center">*/}
      {/*  <div className="flex-auto">1</div>*/}
      {/*  <div className="flex-auto">2</div>*/}
      {/*  <div className="flex-auto">3</div>*/}
      {/*</div>*/}

      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-3 bg-gray-100">01</div>
        <div className="col-span-2 bg-amber-100">02</div>
        <div className="row-span-2 col-span-2 bg-indigo-950">03</div>
      </div>
    </>
  );
}
