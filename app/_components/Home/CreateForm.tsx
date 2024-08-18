"use client";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import AddButton from '@/app/Assets/AddButton';
import PenIcon from '@/app/Assets/PenIcon';
import React, { useRef, useState, useMemo, useEffect } from 'react';
import Name from "@/app/FormComponents/Name";
import Email from "@/app/FormComponents/Email";
import Number from "@/app/FormComponents/Number";
import Checkbox from "@/app/FormComponents/CheckBox";
import LongText from "@/app/FormComponents/LongText";
import { useFormContext } from '@/app/contexts/FormContext';

function CreateForm() {
    const [textOn, setTextOn] = useState(false);
    const textRef = useRef<HTMLInputElement>(null);


    const itemNumbers: Record<string, JSX.Element> = {
        Profile: <Name key="Profile" />,
        Email: <Email key="Email" />,
        Number: <Number key="Number" />,
        CheckBox: <Checkbox key="CheckBox" />,
        LongText: <LongText key="LongText" />
    };
    const { selectedItems, setSelectedItems } = useFormContext();

    const handleInputChange = () => {
        if (textRef.current && textRef.current.value.trim() !== "") {
            setTextOn(true);
        } else {
            setTextOn(false);
        }
    };

    const handleItemClick = (item: string) => {
        setSelectedItems(prevItems => [...prevItems, item]);
    };

    // Memoize the selected items list
    const memoizedItems = useMemo(() => selectedItems, [selectedItems]);

    // Effect to log the memoized items to the console
    useEffect(() => {
        console.log("Memoized Items:", memoizedItems);
    }, [memoizedItems]);

    return (
        <section className='w-full flex flex-col items-start justify-start py-[24px] gap-12'>
            <div className='flex flex-row'>
                <input
                    className={`text-[#8B8B8B] text-[24px] font-bold outline-none border-none w-[235px]`}
                    placeholder='Name Of The Form'
                    ref={textRef}
                    onChange={handleInputChange}
                />
                {!textOn && <PenIcon />}
            </div>

            <DropdownMenu>
                <DropdownMenuTrigger><AddButton /></DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Component</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => handleItemClick('Profile')}>Text input</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleItemClick('Email')}>Email</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleItemClick('Number')}>Number</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleItemClick('CheckBox')}>Check Box</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleItemClick('LongText')}>Long Text Field</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <div className="flex flex-col gap-8">
                {selectedItems.map(item => (
                    <div key={item}>
                        {itemNumbers[item]}
                    </div>
                ))}
            </div>
                
            <div className="bg-[#09090B] text-[#fafafa] w-[118px] h-[57px] flex justify-center items-center text-[20px] font-semibold rounded-[9px]">
                Submit
            </div>
        </section>
    );
}

export default CreateForm;

