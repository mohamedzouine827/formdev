import Image from 'next/image'
import React from 'react'

import Images from "@/public/code.png"
export default function FeatureElementSecond() {
  return (
    <div className="h-[464px] w-full items-start justify-between inline-flex ">
    <div className="w-[474px] h-[464px]  rounded-2xl " >
      <Image src={Images.src} className='w-[800px] h-[264px]'  width={3500} height={1920} alt="form to code"/>
    </div>
    <div className="flex-col justify-start items-start gap-6 inline-flex">
        <div className="self-stretch text-black text-[32px] font-semibold ">Forms to code</div>
        <div className="self-stretch h-[164px] flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch text-zinc-500 text-base font-semibold ">Instant Code Export: Generate ready-to-use code from your forms<br/> with a single click, saving you hours of manual coding.</div>
            <div className="self-stretch text-zinc-500 text-base font-semibold ">Boost Productivity: Accelerate your development process by cutting<br/> down on repetitive tasks with instant code generation.</div>
            <div className="self-stretch text-zinc-500 text-base font-semibold ">Developer-Friendly: Built with developers in mind, offering flexibility <br/>and customization for more advanced use cases.</div>
            <div className="self-stretch text-zinc-500 text-base font-semibold ">Reduce Human Error: Minimize coding errors by automatically converting your<br/> forms to precise, functional code.</div>
            <div className="self-stretch text-zinc-500 text-base font-semibold ">Clean, Maintainable Code: Receive optimized, clean code that&apos;s easy to<br/> integrate and maintain in your projects.</div>
        </div>
    </div>
</div>
  )
}
