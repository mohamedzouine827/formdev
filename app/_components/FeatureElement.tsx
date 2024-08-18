import React from 'react'

function FeatureElement() {
    return (
        <div className="h-[464px] w-full items-start justify-between inline-flex">
            <div className=" flex-col justify-start items-start gap-6 inline-flex">
                <div className="self-stretch text-black text-[32px] font-semibold ">Feature #1</div>
                <div className="self-stretch h-[164px] flex-col justify-start items-start gap-4 flex">
                    <div className="self-stretch text-zinc-500 text-base font-semibold ">Description fo the first feature that description describe it</div>
                    <div className="self-stretch text-zinc-500 text-base font-semibold ">Description fo the first feature that description describe it</div>
                    <div className="self-stretch text-zinc-500 text-base font-semibold ">Description fo the first feature that description describe it</div>
                    <div className="self-stretch text-zinc-500 text-base font-semibold ">Description fo the first feature that description describe it</div>
                    <div className="self-stretch text-zinc-500 text-base font-semibold ">Description fo the first feature that description describe it</div>
                </div>
            </div>
            <div className="bg-[#d9d9d9] h-[464px] w-[474px]" />
        </div>
    )
}

export default FeatureElement