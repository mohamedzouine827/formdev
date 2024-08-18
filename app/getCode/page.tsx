"use client";
import React from 'react';
import { useFormContext } from '@/app/contexts/FormContext';
import Link from 'next/link';

// Create a function that maps the items to their actual JSX code as strings
const getElementCode = (item: string) => {
  switch (item) {
    case "Profile":
      return `
<div className="w-[237px] h-[93px] flex-col justify-start items-start gap-4 inline-flex">
  <div className="mt-2">
    <input
      type="text"
      placeholder="Please Fill this label"
      className="w-full bg-transparent text-black text-xl font-bold border-none outline-none"
    />
  </div>
  <div className="w-[237px] px-6 py-4 rounded-[13px] border border-zinc-500 justify-start items-center gap-2.5 inline-flex">
    <input
      type="text"
      placeholder="First Name"
      className="w-full h-full bg-transparent text-zinc-500 text-base font-bold border-none outline-none"
    />
  </div>
</div>
      `;
    case "Email":
      return `
<div className="w-[237px] h-[93px] flex-col justify-start items-start gap-4 inline-flex">
  <div className="mt-2">
    <div className="w-full bg-transparent text-black text-xl font-bold border-none outline-none">Email</div>
  </div>
  <div className="w-[450px] px-6 py-4 rounded-[13px] border border-zinc-500 justify-start items-center gap-2.5 inline-flex">
    <input
      type="email"
      placeholder="Enter your Email"
      className="w-full h-full bg-transparent text-zinc-500 text-base font-bold border-none outline-none"
    />
  </div>
</div>
      `;
    case "Number":
      return `
<div className="w-[237px] h-[93px] flex-col justify-start items-start gap-4 inline-flex">
  <div className="mt-2">
    <input
      type="text"
      placeholder="Please Fill this label"
      className="w-full bg-transparent text-black text-xl font-bold border-none outline-none"
    />
  </div>
  <div className="w-[350px] px-6 py-4 rounded-[13px] border border-zinc-500 justify-start items-center gap-2.5 inline-flex">
    <input
      type="number"
      placeholder="Enter your Number"
      className="w-full h-full bg-transparent text-zinc-500 text-base font-bold border-none outline-none"
    />
  </div>
</div>
      `;
    case "CheckBox":
      return `
<div className="w-full flex-col justify-start items-start gap-4 inline-flex">
  <div className="w-full">
    <input
      type="text"
      placeholder="Type your question or any text here"
      className="w-full bg-transparent text-black text-xl font-bold px-0 py-0 outline-none"
    />
  </div>
  <div className=" px-6 py-2 rounded-[13px] border border-zinc-500 justify-start items-center gap-2.5 inline-flex">
    <input
      type="checkbox"
      className="mr-2"
    />
    <label className="text-zinc-500 text-[20px] font-semibold">
      Option 1
    </label>
  </div>
  <div className=" px-6 py-2 rounded-[13px] border border-zinc-500 justify-start items-center gap-2.5 inline-flex">
    <input
      type="checkbox"
      className="mr-2"
    />
    <label className="text-zinc-500 text-[20px] font-semibold">
      Option 2
    </label>
  </div>
</div>
      `;
    case "LongText":
      return `
<div className="w-[237px] flex-col justify-start items-start gap-4 inline-flex">
  <div className="mt-2">
    <input
      type="text"
      placeholder="Please Fill this label"
      className="w-full bg-transparent text-black text-xl font-bold border-none outline-none"
    />
  </div>
  <div className="w-[540px] h-[150px] px-6 py-2 rounded-[13px] border border-zinc-500">
    <textarea
      placeholder="Long Text Field"
      className="w-full h-full bg-transparent text-zinc-500 text-base font-bold border-none outline-none resize-none"
      style={{ paddingTop: '8px', paddingBottom: '8px' }}
    />
  </div>
</div>
      `;
    default:
      return '';
  }
};

const GetCode = () => {
  const { selectedItems, formName } = useFormContext();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">
        {formName ? formName : 'Untitled Form'}
      </h1>
      <div className="flex flex-col gap-8">
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm whitespace-pre-wrap">
            {`<div className="flex flex-col gap-8">`}
            
            {`<div className="text-2xl font-bold text-[#09000b]">${formName}</div>`}
            {selectedItems.map(item => getElementCode(item)).join('')}
            {`</div>`}
          </code>
        </pre>
      </div>
      <Link href="/">
        <button className="mt-8 bg-[#09000b] text-white font-bold py-4 px-8 rounded-2xl">
          Create another form
        </button>
      </Link>
    </div>
  );
};

export default GetCode;
