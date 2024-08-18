import React from 'react'
import Logo from '../Assets/logo'

export default function Footer() {
  return (
    <section className='px-[90px] py-[96px] bg-[#09090B] flex flex-row justify-between items-center'>
        <Logo color='#FAFAFA'/>
        <h1 className='font-semibold text-[16px] text-[#fafafa]'>
        All Rights reserved ©
        </h1>
    </section>
  )
}
