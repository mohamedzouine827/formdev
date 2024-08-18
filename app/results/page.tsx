"use client";
import React from 'react';
import { useFormContext } from '@/app/contexts/FormContext';
import Name from "../FormComponents/Name";
import Email from "../FormComponents/Email";
import Number from "../FormComponents/Number";
import Checkbox from "../FormComponents/CheckBox";
import LongText from "../FormComponents/LongText";
import Link from 'next/link';

const ResultsPage = () => {
  const { selectedItems, formName } = useFormContext();

  const itemComponents: Record<string, JSX.Element> = {
    Profile: <Name key="Profile" />,
    Email: <Email key="Email" />,
    Number: <Number key="Number" />,
    CheckBox: <Checkbox key="CheckBox" />,
    LongText: <LongText key="LongText" />
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">
        {formName ? formName : 'Untitled Form'}
      </h1>
      <div className="flex flex-col gap-8">
        {selectedItems.map(item => (
          <div key={item}>
            {itemComponents[item]}
          </div>
        ))}
      </div>
      <Link href="/create">
        <button className="mt-8 bg-[#09000b] text-white font-bold py-4 px-8 rounded-2xl">
          Create another form
        </button>
      </Link>
    </div>
  );
};

export default ResultsPage;
