import React from 'react'
import CreateForm from './CreateForm'
import { useFormContext } from '@/app/contexts/FormContext';
import Link from 'next/link';

export default function CreateFormSection() {
    return (
        <section className='w-full px-[90px] py-[96px] flex justify-center items-center flex-col gap-[48px]'>
            <h1 className='text-[48px] font-bold'>
                Create Your Form
            </h1>
            <CreateForm />
            <Link href="/results">
            <div className="h-[57px] px-8 py-4 rounded-[9px] border border-zinc-950 justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-xl font-semibold font-['Plus Jakarta Sans']">Get Code</div>
            </div>
            </Link>
        </section>
    )
}
