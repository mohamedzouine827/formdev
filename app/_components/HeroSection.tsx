import React from 'react'

export default function HeroSection() {
    return (
        <section className='w-full flex px-[90] py-[96px] items-center justify-center gap-8 flex-col'>
            <div className='flex flex-col gap-[24px]  items-center justify-center'>
                <h1 className='text-[64px] font-bold text-black'>
                    Insert form in your code easily
                </h1>
                <h2 className='text-2xl capitalize text-[#71717a] font-semibold w-[864px] text-center'>
                    turn any  form that you’ve made in code in matter of seconds not minutes with FormDev
                </h2>
            </div>
            <div className="h-[52px] justify-start items-start gap-8 inline-flex">
                <button className="h-[52px] px-6 py-4 bg-zinc-950 rounded-[9px] justify-center items-center gap-2.5 flex">
                    <div className="text-neutral-50 text-base font-semibold font-['Plus Jakarta Sans']">Create Form</div>
                </button>
                <button className="h-[52px] px-6 py-4 rounded-[9px] border border-zinc-950 justify-center items-center gap-2.5 flex">
                    <div className="text-zinc-950 text-base font-semibold font-['Plus Jakarta Sans']">Templates</div>
                </button>
            </div>
        </section>
    )
}
