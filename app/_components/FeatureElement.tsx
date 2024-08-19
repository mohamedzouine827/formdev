import React from 'react'
import FormImage from "@/public/form.jpg"
import Image from 'next/image'

function FeatureElement() {
    return (
        <div className="h-[464px] w-full items-start justify-between inline-flex">
            <div className=" flex-col justify-start items-start gap-6 inline-flex">
                <div className="self-stretch text-black text-[32px] font-semibold ">Make Forms Fast</div>
                <div className="self-stretch h-[164px] flex-col justify-start items-start gap-4 flex">
                    <div className="self-stretch text-zinc-500 text-base font-semibold ">Rapid Setup: Build and deploy forms quickly, cutting down on development time.</div>
                    <div className="self-stretch text-zinc-500 text-base font-semibold ">Real-Time Updates: Instantly see changes as you customize your forms.</div>
                    <div className="self-stretch text-zinc-500 text-base font-semibold ">No Coding Required: Create fully functional forms without needing to write a single line of code.</div>
                    <div className="self-stretch text-zinc-500 text-base font-semibold ">Advanced Form Logic: Implement conditional logic to tailor form experiences based on user input.</div>
                    <div className="self-stretch text-zinc-500 text-base font-semibold ">Intuitive Interface: Navigate through a simple, user-friendly design that anyone can use.</div>
                </div>
            </div>
            <div className="rounded-3xl  h-[464px] w-[474px]" >
                <Image src={FormImage.src} alt='form image' width={3500} height={3500}/>
            </div>
        </div>
    )
}

export default FeatureElement