import React, { useState } from 'react';

interface CheckboxOption {
    id: number;
    label: string;
    isChecked: boolean;
}

function CheckboxGroup() {
    const [options, setOptions] = useState<CheckboxOption[]>([]);
    const [newLabel, setNewLabel] = useState<string>('');
    const [question, setQuestion] = useState<string>(''); // For the user's question or text

    // Handle checkbox state change
    const handleCheckboxChange = (id: number) => {
        setOptions((prevOptions) =>
            prevOptions.map((option) =>
                option.id === id
                    ? { ...option, isChecked: !option.isChecked }
                    : option
            )
        );
    };

    // Handle label input change for a new option
    const handleNewLabelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewLabel(event.target.value);
    };

    // Handle question or text input change
    const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuestion(event.target.value);
    };

    // Add a new checkbox option
    const handleAddOption = () => {
        if (newLabel.trim() === '') return;

        const newOption: CheckboxOption = {
            id: options.length + 1,
            label: newLabel,
            isChecked: false,
        };

        setOptions([...options, newOption]);
        setNewLabel(''); // Clear the input field after adding
    };

    return (
        <div className="w-full flex-col justify-start items-start gap-4 inline-flex">
            {/* Text Field for Question or any Text */}
            <div className="w-full">
                <input
                    type="text"
                    value={question}
                    onChange={handleQuestionChange}
                    placeholder="Type your question or any text here"
                    className="w-full bg-transparent text-black text-xl font-bold px-0 py-0 outline-none"
                />
            </div>

            {/* Dynamically Added Checkbox Options */}
            {options.map((option) => (
                <div
                    key={option.id}
                    className=" px-6 py-2 rounded-[13px] border border-zinc-500 justify-start items-center gap-2.5 inline-flex"
                >
                    <input
                        type="checkbox"
                        checked={option.isChecked}
                        onChange={() => handleCheckboxChange(option.id)}
                        className="mr-2"
                    />
                    <label className="text-zinc-500 text-[20px] font-semibold">
                        {option.label}
                    </label>
                </div>
            ))}

            {/* Input and Button to Add New Checkbox Options */}
            <div className="mt-4 flex gap-2">
                <input
                    type="text"
                    value={newLabel}
                    onChange={handleNewLabelChange}
                    placeholder="Add a new option"
                    className="w-[237px] bg-transparent text-black text-xl font-bold border border-zinc-500 px-4 py-2 rounded outline-none"
                />
                <button
                    onClick={handleAddOption}
                    className="bg-black text-white px-4 py-2 rounded font-bold"
                >
                    Add
                </button>
            </div>
        </div>
    );
}

export default CheckboxGroup;
