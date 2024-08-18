import React, { useState } from 'react';

function Email() {
    const [email, setEmail] = useState('');
    const [label, setLabel] = useState('Email');
    const [placeholder, setPlaceholder] = useState('Enter your Email');

    // Update the label of the first input and the placeholder of the second input





    return (
        <div className="w-[237px] h-[93px] flex-col justify-start items-start gap-4 inline-flex">
            <div className="mt-2">
                <div className="w-full bg-transparent text-black text-xl font-bold border-none outline-none">Email</div>
            </div>
            <div className="w-[450px] px-6 py-4 rounded-[13px] border border-zinc-500 justify-start items-center gap-2.5 inline-flex">
                <input
                    type="email"

                    placeholder={placeholder}
                    className="w-full h-full bg-transparent text-zinc-500 text-base font-bold border-none outline-none"
                />
            </div>
        </div>
    );
}

export default Email;
