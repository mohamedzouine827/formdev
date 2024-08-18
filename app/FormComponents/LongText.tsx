import React, { useState } from 'react';

function LongText() {
    const [firstName, setFirstName] = useState<string>('');
    const [label, setLabel] = useState<string>('Long Text Field');
    const [placeholder, setPlaceholder] = useState<string>('Long Text Field');

    // Update the label of the first input and the placeholder of the second input
    const updateFields = (newLabel: string) => {
        setLabel(newLabel);
        setPlaceholder(`${newLabel}`);
    };

    const handleFirstNameChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFirstName(event.target.value);
    };

    const handleLabelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateFields(event.target.value);
    };

    return (
        <div className="w-[237px] flex-col justify-start items-start gap-4 inline-flex">
            <div className="mt-2">
                <input
                    type="text"
                    value={label}
                    onChange={handleLabelChange}
                    placeholder="Please Fill this label"
                    className="w-full bg-transparent text-black text-xl font-bold border-none outline-none"
                />
            </div>
            <div className="w-[540px] h-[150px] px-6 py-2 rounded-[13px] border border-zinc-500">
                <textarea
                    value={firstName}
                    onChange={handleFirstNameChange}
                    placeholder={placeholder}
                    className="w-full h-full bg-transparent text-zinc-500 text-base font-bold border-none outline-none resize-none"
                    style={{ paddingTop: '8px', paddingBottom: '8px' }}
                />
            </div>
        </div>
    );
}

export default LongText;
