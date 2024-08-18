import React from 'react'
import FeatureElement from './FeatureElement'
import FeatureElementSecond from './FeatureElementSecond'

export default function FeaturesSection() {
    return (
        <section className='w-full px-[90px] py-24 gap-12 flex justify-center items-center flex-col'>
            <div className='flex flex-col justify-center items-center gap-[24px]'>
                <h1 className='font-semibold text-[48px]'>
                    Why Us?
                </h1>
                <h2 className='text-[#71717A] font-semibold text-2xl'>
                    &quot;Why Choose FormDev: Effortless Form Creation with Seamless Code Integration&quot;
                </h2>
            </div>
            <div className='w-full flex flex-col gap-[64px]'>
            <FeatureElement/>
            <FeatureElementSecond/>
            </div>
        </section>
    )
}
