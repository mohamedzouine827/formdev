import React from 'react'


export default function HowItsWorking() {
    return (
        <div className="w-full h-[711px] px-[90px] py-24 justify-start items-start gap-2.5 inline-flex">
            <div className="grow shrink basis-0 h-full " >
                <video
                    src="/video.mp4"
                    autoPlay
                    loop
                    playsInline
                    muted
                    style={{
                        pointerEvents: 'none', // Prevent interaction with the video
                    }}
                />

            </div>
        </div>
    )
}
