import React, { useState } from 'react';

function Name() {
    const [firstName, setFirstName] = useState('');
    const [label, setLabel] = useState('short text');
    const [placeholder, setPlaceholder] = useState('Enter your short text');

    // Update the label of the first input and the placeholder of the second input
    const updateFields = (newLabel) => {
        setLabel(newLabel);
        setPlaceholder(`Enter your ${newLabel}`);
    };

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLabelChange = (event) => {
        updateFields(event.target.value);
    };

    return (
        <div className="w-[237px] h-[93px] flex-col justify-start items-start gap-4 inline-flex">
            <div className="mt-2">
                <input
                    type="text"
                    value={label}
                    onChange={handleLabelChange}
                    placeholder="Please Fill this label"
                    className="w-full bg-transparent text-black text-xl font-bold border-none outline-none"
                />
            </div>
            <div className="w-[237px] px-6 py-4 rounded-[13px] border border-zinc-500 justify-start items-center gap-2.5 inline-flex">
                <input
                    type="text"
                    value={firstName}
                    onChange={handleFirstNameChange}
                    placeholder={placeholder}
                    className="w-full h-full bg-transparent text-zinc-500 text-base font-bold border-none outline-none"
                />
            </div>
        </div>
    );
}

export default Name;
